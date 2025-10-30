import programs from "@/assets/programs.json";
import type { Program } from "@/types/program";

export function getPrograms(): Program[] {
  return programs.map((program) => ({
    title: program.企画名,
    officialTitle: program.正式企画名,
    organization: program.団体名,
    description: program.紹介文,
    placement: program.教室 ?? "",
    contest: program.企画コンテスト,
    where: program.where,
    logo: `/logo/${program.logo}`,
    tags: program.タグ,
    caution: program.caution ?? [],
  }));
}
