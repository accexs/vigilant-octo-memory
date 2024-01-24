import { validateUrl } from "../../utils/validators";
import { CreateSlugDto, SaveSlugDto, Slug } from "../domain/slug";
import { nanoid } from "nanoid";
import { slugRepository } from "../infraestructure/slug.repository";

const createSlug = async (input: CreateSlugDto) => {
  const url = validateUrl(input.origin);
  const shortUrl = nanoid();
  const slug: SaveSlugDto = {
    origin: url,
    targetSlug: shortUrl,
  };
  return slugRepository.toRest(await slugRepository.create(slug));
};

export { createSlug };
