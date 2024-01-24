import { validateUrl } from "../../utils/validators";
import { CreateSlugDto, Slug } from "../domain/slug";
import { slugRepository } from "../infraestructure/slug.repository";

const updateSlug = async (slug: string, input: CreateSlugDto) => {
  const url = validateUrl(input.origin);
  const mySlug = await slugRepository.getByTargetSlug(slug);
  mySlug.origin = url;
  return slugRepository.toRest((await slugRepository.update(mySlug)) as Slug);
};

export { updateSlug };
