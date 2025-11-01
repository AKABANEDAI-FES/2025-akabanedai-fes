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
import { FilterGroup } from "../filter/filter";
import styles from "./content.module.css";

export function Content() {
  const [selectedWhere, setSelectedWhere] = useState<Where[]>([]);
  const [selectedTag, setSelectedTag] = useState<Tag[]>([]);
  const [selectedCaution, setSelectedCaution] = useState<Caution[]>([]);
  return (
    <Container as="div" className={styles.content}>
      <FilterGroup>
        <Filter
          options={where}
          value={selectedWhere}
          title="場所"
          onValueChange={setSelectedWhere}
        />
        <Filter
          options={tags}
          value={selectedTag}
          title="タグ"
          onValueChange={setSelectedTag}
        />
        <Filter
          options={cautions}
          value={selectedCaution}
          title="注意事項のある企画を除外"
          onValueChange={setSelectedCaution}
          defaultOpen={false}
        />
      </FilterGroup>
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
