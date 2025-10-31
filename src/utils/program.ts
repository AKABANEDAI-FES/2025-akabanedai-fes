import programs from "@/assets/programs.json";
import type { Caution, Program, Tag, Where } from "@/types/program";

export function getPrograms(): Program[] {
  return programs.map((program) => ({
    title: program.企画名,
    officialTitle: program.正式企画名,
    organization: program.団体名,
    description: program.紹介文,
    placement: program.教室 ?? "",
    contest: program.企画コンテスト,
    where: program.where as Where | null,
    logo: `${process.env.BASE_PATH ?? ""}${program.logo}`,
    tags: program.タグ as Tag[],
    cautions: (program.caution ?? []) as Caution[],
  }));
}
