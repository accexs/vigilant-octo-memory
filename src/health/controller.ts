import { Request, Response } from "express";
import db from "../db";

export default function getHealth(_req: Request, res: Response): void {
  try {
    db.get("select * from slugs", (err, row) => {
      if (err) throw err;
    });
    res.json({ status: "OK" });
  } catch (err: unknown) {
    console.log(err);
    res.status(503).send();
  }
}
