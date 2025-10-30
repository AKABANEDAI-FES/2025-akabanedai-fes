import Image from "next/image";
import type { Program } from "@/types/program";
import { Tag } from "../tag/tag";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import Pin from "./pin.svg";
import styles from "./program-list.module.css";

export type Props = {
  programs: Program[];
};

export function ProgramList({ programs }: Props) {
  return (
    <div className={styles.programList}>
      {programs.map((program) => (
        <ProgramItem key={program.title} program={program} />
      ))}
    </div>
  );
}

function ProgramItem({ program }: { program: Program }) {
  return (
    <div className={styles.programItem}>
      <Image
        src={program.logo}
        alt=""
        width={128}
        height={128}
        className={styles.programLogo}
      />
      <Heading as="h2" variant="secondary" className={styles.programTitle}>
        {program.title}
      </Heading>
      <Text className={styles.programOrganization}>{program.organization}</Text>
      <Text className={styles.programLocation}>
        <Pin style={{ fill: whereToColor(program.where) }} />
        {formatLocation(program)}
      </Text>
      <div className={styles.programTagList}>
        {program.tags.map((tag) => (
          <Tag key={tag} size="sm" className={styles.programTag}>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
}

function formatLocation(program: Program): string {
  if (program.where) {
    return `${program.placement}（${program.where}）`;
  }
  return program.placement;
}

function whereToColor(where: string | null): string {
  switch (where?.toLowerCase()) {
    case "iniad":
      return "#01a3c1";
    case "wellb":
      return "#b47f3b";
    case "helspo":
      return "#5b8944";
    default:
      return "#182349";
  }
}
