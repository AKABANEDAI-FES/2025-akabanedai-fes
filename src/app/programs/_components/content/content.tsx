"use client";

import { type RefCallback, useCallback, useState } from "react";
import {
  type Caution,
  cautions,
  programs,
  type Tag,
  tags,
  type Where,
  where,
} from "@/assets/programs";
import Star from "@/assets/star.svg";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Filter } from "../filter";
import styles from "./theme.module.css";

export function Content() {
  const [selectedWhere, setSelectedWhere] = useState<Where[]>([]);
  const [selectedTag, setSelectedTag] = useState<Tag[]>([]);
  const [selectedCaution, setSelectedCaution] = useState<Caution[]>([]);
  return (
    <Container as="div">
      <Filter
        options={where}
        selected={selectedWhere}
        title="場所"
        onSelect={(option) =>
          setSelectedWhere((curr) =>
            curr.includes(option)
              ? curr.filter((o) => o !== option)
              : [...curr, option],
          )
        }
      />
      <Filter
        options={tags}
        selected={selectedTag}
        title="タグ"
        onSelect={(option) =>
          setSelectedTag((curr) =>
            curr.includes(option)
              ? curr.filter((o) => o !== option)
              : [...curr, option],
          )
        }
      />
      <Filter
        options={cautions}
        selected={selectedCaution}
        title="注意事項のある企画を除外"
        onSelect={(option) =>
          setSelectedCaution((curr) =>
            curr.includes(option)
              ? curr.filter((o) => o !== option)
              : [...curr, option],
          )
        }
      />
      {programs
        .filter(({ where, tags, cautions }) =>
          [
            (where !== null && selectedWhere.includes(where)) ||
              selectedWhere.length === 0,
            selectedTag.every((tag) => tags.includes(tag)),
            selectedCaution.length === 0 ||
              !selectedCaution.some((caution) => cautions.includes(caution)),
          ].every(Boolean),
        )
        .map(({ programName, formalProgramName, contestNumber }) => (
          <div key={`${formalProgramName}-${contestNumber}`}>
            <h3>{programName}</h3>
          </div>
        ))}
    </Container>
  );
}
