import type { StaticImageData } from "next/image";
import type { Program } from "@/types/program";

export type MapData = {
  [key: string]: {
    label: string;
    details: {
      label: string;
      image: StaticImageData;
    }[];
    filter: (programs: Program[], index: number) => Program[];
  };
};
