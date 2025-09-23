declare module "*.svg" {
  // biome-ignore lint/style/useImportType: this is a declaration file
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const content: unknown;
  export default content;
}
