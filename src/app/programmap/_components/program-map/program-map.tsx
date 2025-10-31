"use client";

import { Tabs } from "@ark-ui/react/tabs";
import Image, { type StaticImageData } from "next/image";
import { useMemo, useState } from "react";
import { BlurredBox } from "@/components/ui/blurred-box";
import type { Program } from "@/types/program";
import { getPrograms } from "@/utils/program";
import { FloorProgram } from "../floor-program";
import helspo1f from "./map/HELSPO_1f.webp";
import helspo3f from "./map/HELSPO_3f.webp";
import iniad1f from "./map/INIAD_1f.webp";
import iniad2f from "./map/INIAD_2f.webp";
import iniad3f from "./map/INIAD_3f.webp";
import iniad4f from "./map/INIAD_4f.webp";
import outside from "./map/OUTSIDE.webp";
import wellb1f from "./map/WELLB_1f.webp";
import wellb2f from "./map/WELLB_2f.webp";
import wellb3f from "./map/WELLB_3f.webp";
import wellb4f from "./map/WELLB_4f.webp";
import wellb5f from "./map/WELLB_5f.webp";
import wellb6f from "./map/WELLB_6f.webp";
import MapSvg from "./map.svg";
import styles from "./program-map.module.css";

type MapData = {
  [key: string]: {
    label: string;
    details: {
      label: string;
      image: StaticImageData;
    }[];
    filter: (programs: Program[], index: number) => Program[];
  };
};

const mapData = {
  iniad: {
    label: "INIAD",
    details: [
      {
        label: "1F",
        image: iniad1f,
      },
      {
        label: "2F",
        image: iniad2f,
      },
      {
        label: "3F",
        image: iniad3f,
      },
      {
        label: "4F",
        image: iniad4f,
      },
    ],
    filter: (programs, index) => {
      const floor = index + 1;
      const specific = [
        [
          "INIAD プレゼンテーションハブ",
          "INIAD メディアセンター",
          "INIAD ホール",
        ],
        ["第1会議室", "第2会議室"],
        [],
        [],
      ];
      return programs.filter(
        (program) =>
          program.where?.toLocaleLowerCase() === "iniad" &&
          (program.placement.startsWith(floor.toString()) ||
            specific[floor - 1].includes(program.placement)),
      );
    },
  },
  wellb: {
    label: "WELLB",
    details: [
      {
        label: "1F",
        image: wellb1f,
      },
      {
        label: "2F",
        image: wellb2f,
      },
      {
        label: "3F",
        image: wellb3f,
      },
      {
        label: "4F",
        image: wellb4f,
      },
      {
        label: "5F",
        image: wellb5f,
      },
      {
        label: "6F",
        image: wellb6f,
      },
    ],
    filter: (programs, index) => {
      const floor = index + 1;
      const specific = [
        ["実験工房・20313教室"],
        ["エスカレーター前"],
        ["学生ホール", "ECZ", "実験工房・20313教室"],
        [],
        [],
        ["保育実習室"],
      ];
      return programs.filter(
        (program) =>
          program.where?.toLocaleLowerCase() === "wellb" &&
          (program.placement.at(2) === `${floor}` ||
            specific[index].includes(program.placement)),
      );
    },
  },
  helspo: {
    label: "HELSPO",
    details: [
      {
        label: "1F",
        image: helspo1f,
      },
      {
        label: "3F",
        image: helspo3f,
      },
    ],
    filter: (programs, index) => {
      const floor = index === 0 ? 1 : 3;
      const specific = [["食堂実習室"], ["アリーナ"]];

      return programs.filter(
        (program) =>
          program.where?.toLocaleLowerCase() === "helspo" &&
          (program.placement.at(2) === `${floor}` ||
            specific[index].includes(program.placement)),
      );
    },
  },
  other: {
    label: "屋外",
    details: [
      {
        label: "1F",
        image: outside,
      },
    ],
    filter: (programs) => {
      return programs.filter((program) => program.where === "屋外");
    },
  },
} as const satisfies MapData;

export function ProgramMap() {
  const [where, setWhere] = useState<keyof typeof mapData>("iniad");
  const [selected, setSelected] = useState(0);
  const programs = useMemo(() => getPrograms(), []);
  const filter = mapData[where].filter;

  return (
    <BlurredBox className={styles.container}>
      <Tabs.Root
        value={where}
        onValueChange={(e) => {
          setSelected(0);
          setWhere(e.value as keyof typeof mapData);
        }}
      >
        <Tabs.List className={styles.tabList}>
          {Object.entries(mapData).map(([key, value]) => (
            <Tabs.Trigger className={styles.tabTrigger} key={key} value={key}>
              {value.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Tabs.Content className={styles.tabContent} value="iniad">
          <TabContent
            location="iniad"
            selected={selected}
            setSelected={setSelected}
          />
        </Tabs.Content>
        <Tabs.Content className={styles.tabContent} value="wellb">
          <TabContent
            location="wellb"
            selected={selected}
            setSelected={setSelected}
          />
        </Tabs.Content>
        <Tabs.Content className={styles.tabContent} value="helspo">
          <TabContent
            location="helspo"
            selected={selected}
            setSelected={setSelected}
          />
        </Tabs.Content>
        <Tabs.Content className={styles.tabContent} value="other">
          <TabContent
            location="other"
            selected={selected}
            setSelected={setSelected}
          />
        </Tabs.Content>
      </Tabs.Root>
      <FloorProgram programs={filter(programs, selected)} />
    </BlurredBox>
  );
}

type TabContentProps = {
  location: keyof typeof mapData;
  selected: number;
  setSelected: (index: number) => void;
};

function TabContent({
  location,
  selected: _selected,
  setSelected,
}: TabContentProps) {
  const data = mapData[location];
  const selected = Math.min(_selected, data.details.length - 1);

  const handlePrevious = () => {
    setSelected(Math.max(0, selected - 1));
  };

  const handleNext = () => {
    setSelected(Math.min(data.details.length - 1, selected + 1));
  };

  return (
    <>
      {/* Desktop */}
      <Tabs.Root
        value={selected.toString()}
        onValueChange={(e) => setSelected(Number.parseInt(e.value, 10))}
        orientation="vertical"
        className={styles.subTab}
      >
        <Tabs.List className={styles.subTabList}>
          {data.details.toReversed().map((detail, index) => (
            <Tabs.Trigger
              className={styles.subTabTrigger}
              key={detail.label}
              value={(data.details.length - 1 - index).toString()}
            >
              {detail.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {data.details.map((detail, index) => (
          <Tabs.Content
            key={detail.label}
            value={index.toString()}
            className={styles.subTabContent}
          >
            <div className={styles.mapContainer}>
              <Image src={detail.image} alt="" />
              <MapSvg data-location={location} />
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
      {/* Mobile */}
      <div className={styles.carousel}>
        <Image
          src={data.details[selected].image}
          alt=""
          className={styles.mapImage}
        />
        <div className={styles.carouselAction}>
          <button
            type="button"
            className={styles.carouselButton}
            onClick={handlePrevious}
            disabled={selected === 0}
            aria-label="前の階へ"
          >
            <ChevronLeftIcon />
          </button>
          <div className={styles.floorLabel}>
            {data.details[selected].label}
          </div>
          <button
            type="button"
            className={styles.carouselButton}
            onClick={handleNext}
            disabled={selected === data.details.length - 1}
            aria-label="次の階へ"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <title>左矢印</title>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <title>右矢印</title>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
