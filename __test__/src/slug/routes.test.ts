import request from "supertest";
import app from "../../../src/app";
import { initDb, truncateSlugsTable } from "../../../src/db";
import { slugRepository } from "../../../src/slug/infraestructure/slug.repository";

const apiBasePath = `/slug`;
const host = "http://localhost:3000";
const regexPattern = new RegExp(`^${host}${apiBasePath}\/.+`);

const checkSlugResponseOK = (res: any) => {
  expect(res.status).toBe(200);
  expect(res.body).toMatchObject({
    id: expect.any(Number),
    origin: expect.any(String),
    targetSlug: expect.any(String),
    hits: expect.any(Number),
  });
  expect(res.body.targetSlug).toMatch(regexPattern);
};

const createSlug = async (
  origin: string = "https://google.com",
  targetSlug: string = "some-random-string",
) => {
  return await slugRepository.create({
    origin: origin,
    targetSlug: targetSlug,
  });
};

describe("TEST URL Shortener", () => {
  beforeAll(() => {
    initDb();
  });
  afterEach(() => {
    truncateSlugsTable();
  });
  describe("POST :: /slug", () => {
    it("Returns 200 slug created", async () => {
      const res = await request(app)
        .post(`${apiBasePath}`)
        .send({ url: "https://google.com" });
      checkSlugResponseOK(res);
    });
    it("Returns 400 validation error", async () => {
      const res = await request(app)
        .post(`${apiBasePath}`)
        .send({ badname: "https://google.com" });
      expect(res.status).toBe(400);
    });
  });
  describe("GET :: /slug/{slug}", () => {
    it("Returns 200 slug", async () => {
      const mySlug = "my-random-slug";
      const origin = "https://test.com";
      const r = await createSlug(origin, mySlug);
      expect(r.targetSlug).toBe(mySlug);
      const res = await request(app).get(`${apiBasePath}/${mySlug}`);
      checkSlugResponseOK(res);
    });
    it("Returns 404 not found", async () => {
      const res = await request(app).get(`${apiBasePath}/not-found`);
      expect(res.status).toBe(404);
    });
  });
  describe("PATCH :: /slug/{slug}", () => {
    it("Returns 200 slug updated", async () => {
      const mySlug = "my-random-slug";
      const origin = "https://test.com";
      const myNewOrigin = "https://updated.com";
      const r = await createSlug(origin, mySlug);
      expect(r.targetSlug).toBe(mySlug);
      const res = await request(app)
        .patch(`${apiBasePath}/${mySlug}`)
        .send({ url: myNewOrigin });
      expect(res.status).toBe(200);
    });
  });
});
