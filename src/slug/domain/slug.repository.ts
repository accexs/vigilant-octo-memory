import { SaveSlugDto, Slug } from "./slug";

export type SlugRepository = {
  getByTargetSlug(slug: string): Promise<Slug>;
  create(slug: SaveSlugDto): Promise<Slug>;
  update(slugParams: Slug): Promise<Slug | null>;
  toRest(slug: Slug): Slug;
};
