Drop matching WebP files here to replace the built-in placeholder graphics —
no code changes needed. Filenames and alt text are configured in
src/lib/images.js.

Venue / homepage images:

- storefront.webp — real Smart Cook Dera storefront photo, 1485x595 (hero, desktop)
- storefront-sm.webp — 820x329 mobile variant of the hero (srcset)
- karahi.webp — Mutton Karahi, used at ~600x450
- bbq.webp — BBQ mix platter, used at ~600x450
- mosque.webp — mosque exterior/interior, used at ~1200x400
- chai.webp — chai / drinks, used at ~400x300 (menu preview card)
- biryani.webp — Chicken Biryani

Per-dish menu photography lives in public/images/menu/.
Each dish has a full image (`{id}.webp`, ~960px) and a thumbnail
(`{id}-sm.webp`, ~480px). Mapping, licenses and verification status
are in src/data/menu-catalog.js.

Optimize as WebP under ~200KB for venue shots. Menu thumbnails are
generated at ~480px; modal images at ~960px.
