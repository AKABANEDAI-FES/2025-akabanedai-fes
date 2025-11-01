"use client";

import { useLocationState } from "@location-state/core";
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
  const [selectedWhere, setSelectedWhere] = useLocationState<Where[]>({
    name: "where",
    defaultValue: [],
    storeName: "url",
  });
  const [selectedTag, setSelectedTag] = useLocationState<Tag[]>({
    name: "tag",
    defaultValue: [],
    storeName: "url",
  });
  const [selectedCaution, setSelectedCaution] = useLocationState<Caution[]>({
    name: "caution",
    defaultValue: [],
    storeName: "url",
  });

  return (
    <Container as="div" className={styles.content}>
      <FilterGroup>
        <Filter
          options={where}
          value={selectedWhere}
          label="場所"
          onValueChange={setSelectedWhere}
        />
        <Filter
          options={tags}
          value={selectedTag}
          label="タグ"
          onValueChange={setSelectedTag}
        />
        <Filter
          options={cautions}
          value={selectedCaution}
          label="注意事項のある企画を除外"
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
