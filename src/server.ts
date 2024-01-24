import app from "./app";
import { NODE_ENV, getServerPort } from "./utils/set-globals";
import { initDb } from "./db";

const PORT = getServerPort();
app.listen(PORT, () => {
  initDb();
  // eslint-disable-next-line no-console
  console.log(`server listening on port ${PORT}, env: ${NODE_ENV}`);
});
