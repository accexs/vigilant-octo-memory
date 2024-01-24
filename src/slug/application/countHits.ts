import { Slug } from "../domain/slug";
import { slugRepository } from "../infraestructure/slug.repository";

const countHits = async (slug: Slug) => {
  slug.hits++;
  await slugRepository.update(slug);
};

export { countHits };
