"use client";

import { useState } from "react";
import { ProgramList } from "@/components/program-list";
import { Container } from "@/components/ui/container";
import {
  type Caution,
  cautions,
  type Tag,
  tags,
  type Where,
  where,
} from "@/types/program";
import { getPrograms } from "@/utils/program";
import { Filter } from "../filter";
import styles from "./content.module.css";

export function Content() {
  const [selectedWhere, setSelectedWhere] = useState<Where[]>([]);
  const [selectedTag, setSelectedTag] = useState<Tag[]>([]);
  const [selectedCaution, setSelectedCaution] = useState<Caution[]>([]);
  return (
    <Container as="div" className={styles.content}>
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
        isInitOpen={false}
      />
      <ProgramList
        programs={getPrograms().filter(({ where, tags, cautions }) =>
          [
            (where !== null && selectedWhere.includes(where)) ||
              selectedWhere.length === 0,
            selectedTag.every((tag) => tags.includes(tag)),
            selectedCaution.length === 0 ||
              !selectedCaution.some((caution) => cautions.includes(caution)),
          ].every(Boolean),
        )}
      />
    </Container>
  );
}
