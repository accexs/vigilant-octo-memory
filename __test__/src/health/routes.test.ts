import request from "supertest";
import app from "../../../src/app";
import { initDb } from "../../../src/db";

const apiBasePath = `/health-check`;

describe("GET :: /health-check", () => {
  beforeEach(() => {
    initDb();
  });
  it("Return 200 and OK msg ", async () => {
    const res = await request(app).get(`${apiBasePath}`);
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({ status: "OK" });
  });
});
