import type { Metadata } from "next";
import Image from "next/image";
import Pin from "@/assets/pin.svg";
import Star from "@/assets/star.svg";
import Vote from "@/assets/vote.svg";
import { Tag } from "@/components/tag";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import type { Program } from "@/types/program";
import { getPrograms } from "@/utils/program";
import styles from "./page.module.css";

const ALLERGY_NOTICE_TEXT = "模擬店で提供する食品のアレルギー成分表示はこちら";
const ALLERGY_NOTICE_LINK =
  "https://akabanedai-fes.com/09/r8-akabanedaifes-allergy.pdf";

function generateSlug(program: Program) {
  const prod = process.env.NODE_ENV === "production";
  const slug = program.title;
  return prod ? slug : encodeURIComponent(slug);
}

export async function generateStaticParams() {
  const programs = getPrograms();
  if (new Set(programs.map(generateSlug)).size !== programs.length) {
    const duplicateTitles = programs
      .map(generateSlug)
      .filter((title, index, self) => self.indexOf(title) !== index);
    throw new Error(`Duplicate slug found: ${duplicateTitles.join(", ")}`);
  }
  const slugs = programs.map((p) => ({
    title: generateSlug(p),
  }));

  return slugs;
}

function getProgramBySlug(slug: string) {
  return getPrograms().find((p) => p.title === decodeURIComponent(slug));
}

type PageProps = {
  params: Promise<{
    title: string;
  }>;
};

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { title } = await props.params;
  const program = getProgramBySlug(title);

  if (!program) {
    throw new Error("Program not found");
  }

  return {
    title: program.title,
    description: program.description,
    openGraph: {
      title: program.title,
    },
  };
}

export default async function ProgramDetailPage(props: PageProps) {
  const { title } = await props.params;
  const program = getProgramBySlug(title);
  if (!program) {
    throw new Error("Program not found");
  }
  return (
    <Container as="main" className={styles.pageContainer}>
      <Heading as="h1" variant="primary" className={styles.programTitle}>
        {program.title}
      </Heading>
      <BlurredBox className={styles.programItem}>
        <Image
          src={program.logo}
          alt=""
          width={128}
          height={128}
          className={styles.programLogo}
        />
        <div className={styles.programInfo}>
          <Heading
            as="h2"
            variant="secondary"
            className={styles.programOrganization}
          >
            {program.organization}
          </Heading>
          <Heading
            as="h3"
            variant="secondary"
            className={styles.programHeading}
          >
            <Pin
              data-location={program.where?.toLowerCase()}
              className={styles.pin}
            />
            {program.placement}
          </Heading>
          <Heading
            as="h3"
            variant="secondary"
            className={styles.programHeading}
          >
            <Star className={styles.blackStarIcon} />
            企画説明
          </Heading>
          <Text>{program.description}</Text>
          <Heading
            as="h2"
            variant="secondary"
            className={styles.programHeading}
          >
            <Star className={styles.blackStarIcon} />
            注意事項
          </Heading>

          {!program.cautions || program.cautions.length === 0 ? (
            <Text>特記事項はありません。</Text>
          ) : (
            <ul>
              {program.cautions.map((item) => (
                <Text as="li" key={item}>
                  {item === ALLERGY_NOTICE_TEXT ? (
                    <a
                      href={ALLERGY_NOTICE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.boldLink}
                    >
                      {item}
                    </a>
                  ) : (
                    item
                  )}
                </Text>
              ))}
            </ul>
          )}
          <div className={styles.programTagList}>
            {program.tags.map((tag) => (
              <Tag key={tag} size="sm" className={styles.programTag}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </BlurredBox>
      {program.contest && (
        <Text className={styles.programContest}>
          <Vote className={styles.vote} />
          {program.contest}
        </Text>
      )}
    </Container>
  );
}
