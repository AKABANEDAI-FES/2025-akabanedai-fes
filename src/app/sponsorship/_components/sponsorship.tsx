import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { FC } from "react";
import Star from "@/assets/star.svg";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import styles from "./sponsorship.module.css";

type SponsorshipProps = {
  sponsor: string;
  logoPath: StaticImageData | null;
  url: string | null;
};

export const Sponsorship: FC<SponsorshipProps> = ({
  sponsor,
  logoPath,
  url,
}) => {
  return (
    <>
      {url ? (
        <Link
          className={styles.sponsorshipBox}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SponsorshipContent sponsor={sponsor} logoPath={logoPath} />
        </Link>
      ) : (
        <div className={styles.sponsorshipBox}>
          <SponsorshipContent sponsor={sponsor} logoPath={logoPath} />
        </div>
      )}
    </>
  );
};

const SponsorshipContent: FC<Omit<SponsorshipProps, "url">> = ({
  sponsor,
  logoPath,
}) => {
  return (
    <>
      <Text className={styles.sponsorName}>
        <Star className={styles.blackStarIcon} />
        {sponsor} 様
      </Text>
      <div className={styles.logoBox}>
        {logoPath ? (
          <Image
            src={logoPath}
            alt={`${sponsor}のロゴ`}
            className={styles.logo}
          />
        ) : (
          <Heading as="h3" className={styles.noLogo}>
            {sponsor}
          </Heading>
        )}
      </div>
    </>
  );
};
