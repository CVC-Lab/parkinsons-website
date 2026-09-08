## AI4PD site: moved

The AI4PD program site now lives inside the CVC website:

**https://cvc-lab.github.io/projects/ai4pd/**

This repository only serves redirects. `redirects/` holds one small HTML page per
former route that forwards to the matching page on the CVC site (preserving `#anchors`),
and `npm run deploy` publishes that folder to the `gh-pages` branch.

The previous Gatsby source is kept in git history (see the commits before this one) and
its content was migrated to `src/pages/projects/ai4pd/` and `src/markdown/projects/ai4pd/`
in the `CVC-Lab/cvc-lab.github.io` repository.
