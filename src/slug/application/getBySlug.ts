import { slugRepository } from "../infraestructure/slug.repository";
import { NotFoundError } from "../../utils/exceptions";
import { countHits } from "./countHits";

const getBySlug = async (slug: string) => {
  const mySlug = await slugRepository.getByTargetSlug(slug);
  if (!mySlug) throw new NotFoundError("Slug not found");
  await countHits(mySlug);
  return slugRepository.toRest(mySlug);
};

export { getBySlug };
