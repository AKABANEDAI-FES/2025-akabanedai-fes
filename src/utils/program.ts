export function getPrograms(
  programs: {
    企画名: string;
    正式企画名: string;
    団体名: string;
    紹介文: string;
    教室?: string;
    企画コンテスト: string;
    where: string;
    logo: string;
    タグ: string[];
    caution?: string[];
  }[],
) {
  return programs.map((program) => ({
    title: program.企画名,
    officialTitle: program.正式企画名,
    organization: program.団体名,
    description: program.紹介文,
    placement: program.教室 ?? "",
    contest: program.企画コンテスト,
    where: program.where,
    logo: `${process.env.BASE_PATH ?? ""}/logo/${program.logo}`,
    tags: program.タグ,
    cautions: program.caution ?? [],
  }));
}
