import { SlugRepository } from "../domain/slug.repository";
import { SaveSlugDto, Slug } from "../domain/slug";
import db from "../../db";

const slugRepository: SlugRepository = {
  async getByTargetSlug(slug: string): Promise<Slug> {
    const query = "SELECT * FROM slugs WHERE targetSlug = ?";
    return new Promise((resolve, reject) => {
      db.get(query, [slug], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row as Slug);
        }
      });
    });
  },
  async create(slug: SaveSlugDto): Promise<Slug> {
    const insertQuery = "INSERT INTO slugs (origin, targetSlug) VALUES (?, ?)";
    return new Promise((resolve, reject) => {
      db.run(insertQuery, [slug.origin, slug.targetSlug], function (err) {
        if (err) {
          reject(err);
        } else {
          const lastId = this.lastID;
          resolve({
            id: lastId,
            ...slug,
            hits: 0,
          });
        }
      });
    });
  },
  async update(input: Slug): Promise<Slug | null> {
    const updateQuery =
      "UPDATE slugs SET origin = ?, targetSlug = ?, hits = ? WHERE id = ?";
    return new Promise((resolve, reject) => {
      db.run(
        updateQuery,
        [input.origin, input.targetSlug, input.hits, input.id],
        function (err) {
          if (err) {
            reject(err);
          } else {
            const changes = this.changes;
            if (changes > 0) {
              resolve(input);
            } else {
              resolve(null);
            }
          }
        },
      );
    });
  },
  toRest(slug: Slug): Slug {
    slug.targetSlug = prepareTargetSlug(slug.targetSlug);
    return slug;
  },
};

const hostname = "http://localhost:3000/slug";

const prepareTargetSlug = (shortUrl: string) => {
  return `${hostname}/${shortUrl}`;
};

export { slugRepository };
