import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Pin from "@/assets/pin.svg";
import Star from "@/assets/star.svg";
import Vote from "@/assets/vote.svg";
import { Tag } from "@/components/tag";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { getPrograms } from "@/utils/program";
import styles from "./page.module.css";

const ALLERGY_NOTICE_TEXT =
  "模擬店で提供する食品のアレルギー成分表示はこちら" as const;
const ALLERGY_NOTICE_LINK =
  "https://akabanedai-fes.com/09/r8-akabanedaifes-allergy.pdf";

// function encodeTitle(title: string) {
//   // const prod = process.env.NODE_ENV === "production";
//   // return prod ? title : encodeURIComponent(title);
// }

function encodeTitle(title: string) {
  return encodeURIComponent(title);
}

export async function generateStaticParams() {
  // 1. ビルド時に静的に生成したいすべての「title」の値を配列で返す
  //    ※ 通常はAPIやローカルデータから取得します
  const programTitles = getPrograms().map((p) => ({
    // title: p.logo.replace("/logo/image", "").replace(".png", ""),
    title: encodeTitle(p.officialTitle),
  }));

  return programTitles;
}

function getProgramByTitle(title: string) {
  return getPrograms().find(
    (p) => encodeURIComponent(p.officialTitle) === title
  );
}

export async function generateMetadata({
  params,
}: {
  params: { title: string };
}): Promise<Metadata> {
  const encodedTitle = params.title;
  const program = getProgramByTitle(encodedTitle);

  if (!program) {
    return notFound();
  }

  return {
    title: program.title,
    description: program.description,
    openGraph: {
      title: program.title,
    },
  };
}

async function ProgramItem({ params }: { params: Promise<{ title: string }> }) {
  const { title } = await params;
  const program = getPrograms().find(
    (p) => encodeURIComponent(p.officialTitle) === title
  );
  if (!program) return notFound();
  return (
    <Container as="main" className={styles.pageContainer}>
      <Heading as="h1" variant="primary" className={styles.programTitle}>
        {program.title}
      </Heading>
      <div className={styles.programItem}>
        <BlurredBox>
          <Image
            src={program.logo}
            alt=""
            width={128}
            height={128}
            className={styles.programLogo}
          />
        </BlurredBox>
        <div className={styles.programInfo}>
          <Heading
            as="h2"
            variant="secondary"
            className={styles.programOrganization}
          >
            {program.organization}
          </Heading>
          <Heading
            as="h2"
            variant="secondary"
            className={styles.programLocation}
          >
            <Pin
              data-location={program.where?.toLocaleLowerCase()}
              className={styles.pin}
            />
            {program.placement}
          </Heading>
          <div className={styles.programDescription}>
            <div className={styles.programDescriptionTitle}>
              <Star className={styles.blackStarIcon} />
              <Heading as="h2" variant="secondary">
                企画説明
              </Heading>
            </div>
            <BlurredBox className={styles.blurredBox}>
              <Text>{program.description}</Text>
            </BlurredBox>
          </div>
          <div className={styles.programCaution}>
            <div className={styles.programCautionTitle}>
              <Star className={styles.blackStarIcon} />
              <Heading as="h2" variant="secondary">
                注意事項
              </Heading>
            </div>

            <div>
              <BlurredBox className={styles.blurredBox}>
                {program.cautions && program.cautions.length > 0 && (
                  <ul>
                    {program.cautions.map((item) => (
                      <li key={item}>
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
                      </li>
                    ))}
                  </ul>
                )}
              </BlurredBox>
              {(!program.cautions || program.cautions.length === 0) && (
                <Text>特記事項はありません。</Text>
              )}
            </div>
          </div>
          <div className={styles.programTagList}>
            {program.tags.map((tag) => (
              <Tag key={tag} size="sm" className={styles.programTag}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.programContest}>
        <Vote className={styles.vote} />
        <Text>{program.contest}</Text>
      </div>
    </Container>
  );
}

export default ProgramItem;
