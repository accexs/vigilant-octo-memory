import sqlite3 from "sqlite3";

const db = new sqlite3.Database(":memory:");

export const initDb = () => {
  db.run(slugsTableCmd);
};

export const truncateSlugsTable = () => {
  db.run("Delete from slugs");
};

const slugsTableCmd: string = `CREATE TABLE slugs
     (
         id         INTEGER PRIMARY KEY AUTOINCREMENT,
         targetSlug TEXT UNIQUE,
         origin     TEXT,
         hits       INTEGER DEFAULT 0
     )`;

export default db;
