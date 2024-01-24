# Assessment

## Summary

A mixed clean/hexagonal architecture was used to organize code, however to adhere to principles
there should be at least a basic dependency injection layer with a factory to initialize adapters
(db repository for example), or better yet, some IOC container. This way al layers adhere 100% to
the methodology. An even simpler approach could be used to separate on utils, config, services,
repositories, etc. Since we talked about this kind or architecture to organize code it seemed
a nice opportunity to showcase it, in this case the service is pretty small but in a more complex
scenario the organization of this technique will shine. Only integration tests were coded, and we got
90% of coverage which is pretty nice. Unit tests could be added, for example for the URL validation,
which in this case is pretty simple, another approach would be to use a RegEx. For the slug a library
that creates nano id's was used, is very simple and adheres to market standards. There were a few
limitations with Sqlite, probably something like Prisma or TypeORM could be used. Also, schema validation
could be an improvement, alongside some Logger system/implementation.

## Regarding Must have requirements:

It seems all requirements were met. In case of update, I wondered for a while how tp tackle it, id decided that,
once a shortened URL was created it could be used on many sites, so it was a pain point to be able to update it,
all sites or apps using it will need the new shortened url, however It's pretty common to have some changes on the
content the shortened url is pointing to, sometimes the title for the post is used as a slug, so changing the title
could mean also changing the slug, probably something that means that SEO is being improved. In the end only origin
field on DB can be updated. DB fields have some index to ease db reading, for example `targetSlug` field has a unique
index.

## Regarding Nice to have requirements:

Validation is in order, but as mentioned before an alternative could be used. Now for the hits count I did a small
research to check if I could use just one single SQL sentence to update as we discussed. Sadly I didn't get it to work
on my implementation however I understand Sqlite supports `Returning *` which will make it possible to add as an
improvement.
