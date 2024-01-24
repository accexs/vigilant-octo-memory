import { ValidationError } from "./exceptions";

const validateUrl = (url: string) => {
  try {
    const validUrl = new URL(url);
    return validUrl.href;
  } catch (e) {
    throw new ValidationError("Not a valid URL or missing url parameter");
  }
};

export { validateUrl };
