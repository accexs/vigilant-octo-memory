import { Request, Response } from "express";
import { createSlug } from "../application/createSlug";
import { getBySlug } from "../application/getBySlug";
import { NotFoundError, ValidationError } from "../../utils/exceptions";
import { updateSlug } from "../application/updateSlug";

const create = async (req: Request, res: Response) => {
  try {
    const slug = await createSlug({
      origin: req.body.url,
    });
    res.json(slug).status(202).send();
  } catch (err: unknown) {
    if (err instanceof ValidationError) res.status(400).send();
    res.status(500).send();
  }
};
const update = async (req: Request, res: Response) => {
  try {
    const slug = await updateSlug(req.params.slug, {
      origin: req.body.url,
    });
    res.json(slug);
  } catch (err: unknown) {
    if (err instanceof ValidationError) res.status(400).send();
    console.log(err);
    res.status(500).send();
  }
};
const get = async (req: Request, res: Response) => {
  try {
    const slug = await getBySlug(req.params.slug);
    res.json(slug).send();
  } catch (err: unknown) {
    if (err instanceof NotFoundError) res.status(404).send();
    console.log(err);
    res.status(500).send();
  }
};

export { create, update, get };
