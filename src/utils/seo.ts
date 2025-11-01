import type { Metadata as NextMetadata } from "next";

type Metadata = NextMetadata & {
  title?: NonNullable<NextMetadata["title"]>;
  description?: NonNullable<NextMetadata["description"]>;
};

export function createMetadata(metadata: Metadata): Metadata {
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      title: metadata.openGraph?.title ?? metadata.title,
      description: metadata.openGraph?.description ?? metadata.description,
    },
  };
}
