"use client";

import { Dialog } from "@ark-ui/react";
import { Portal } from "@ark-ui/react/portal";
import Image from "next/image";
import Link from "next/link";
import { type FC, useState } from "react";
import Star from "@/assets/star.svg";
import Zoom from "@/assets/zoom.svg";
import { Heading } from "@/components/ui/heading";
import styles from "./sponsorship.module.css";

type SponsorshipProps = {
  sponsor: string;
  logoPath: string | null;
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
  const [isZoom, setIsZoom] = useState(false);
  return (
    <>
      <Heading as="h6" className={styles.sponsorName}>
        <Star className={styles.blackStarIcon} />
        {sponsor} 様
      </Heading>
      <div className={styles.logoBox}>
        {logoPath ? (
          <div className={styles.zoomIconWrapper}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${logoPath}`}
              alt={`${sponsor}のロゴ`}
              className={styles.logo}
              width={280}
              height={200}
            />
            <Dialog.Root open={isZoom} onOpenChange={(e) => setIsZoom(e.open)}>
              <Dialog.Trigger
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setIsZoom(true);
                }}
                className={styles.zoomButton}
              >
                <Zoom className={styles.zoomIcon} />
              </Dialog.Trigger>
              <Portal>
                <Dialog.Positioner>
                  <Dialog.Content>
                    <button
                      className={styles.modalOverlay}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setIsZoom(false);
                      }}
                      type="button"
                      tabIndex={-1}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${logoPath}`}
                        alt={`${sponsor}のロゴ拡大`}
                        className={styles.modalImage}
                        width={280}
                        height={200}
                      />
                    </button>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          </div>
        ) : (
          <Heading as="h3" className={styles.noLogo}>
            {sponsor}
          </Heading>
        )}
      </div>
    </>
  );
};
