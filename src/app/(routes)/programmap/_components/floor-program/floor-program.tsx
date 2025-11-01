import { ProgramList } from "@/components/program-list";
import { Heading } from "@/components/ui/heading";
import type { Program } from "@/types/program";
import styles from "./floor-program.module.css";

type Props = {
  programs: Program[];
};

export function FloorProgram({ programs }: Props) {
  return (
    <section className={styles.programs}>
      <Heading as="h2" variant="secondary" className={styles.programHeading}>
        このフロアの企画
      </Heading>
      <ProgramList programs={programs} />
    </section>
  );
}
