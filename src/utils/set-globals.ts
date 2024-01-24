import * as dotenv from "dotenv";

dotenv.config();

const { env } = process;

export const { NODE_ENV } = env;
export const isProduction = env.NODE_ENV === "production";

export function getServerPort(): string {
  return env.PORT || "3000";
}
