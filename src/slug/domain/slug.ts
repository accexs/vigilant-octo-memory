export type Slug = {
  id: number;
  origin: string;
  targetSlug: string;
  hits: number;
};

export type CreateSlugDto = {
  origin: string;
};

export type SaveSlugDto = {
  origin: string;
  targetSlug: string;
};
