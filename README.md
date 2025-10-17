# Site Web pour URPB

This is a code bundle for Site Web pour URPB. The original project is available at https://www.figma.com/design/jTU7E3Pd2r1mW9uu01fDxE/Site-Web-pour-URPB.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Déploiement

- Variables d’environnement créées:
  - Fichier d’exemple: `/.env.example`
  - Fichiers utilisés localement/CI: `/.env`, `/.env.development`, `/.env.production` (ignorés par git)
  - Clé supportée: `VITE_BASE` (base d’URL du site)
    - Local/dev: `/`
    - Production:
      - GitHub Pages (repo de projet): automatiquement `/<nom-du-repo>/` via le workflow
      - GitHub Pages (user/org `user.github.io`): automatiquement `/`
      - Domaine personnalisé: `/`

- Build/preview:
  - Windows (cmd):
    - Installer: `npm i`
    - Développement: `npm run dev`
    - Build: `npm run build`
    - Aperçu du build: `npm run preview`

- GitHub Pages (automatique via GitHub Actions):
  - Workflow: `/.github/workflows/deploy.yml`
  - Déclenchement: push sur `main` ou `master` (ou manuel depuis l’onglet Actions)
  - Sortie du build: `./build` (configuré dans `vite.config.ts`)
  - La variable `VITE_BASE` est fixée automatiquement selon le type de dépôt pour garantir des URLs correctes.

- Étapes pour activer GitHub Pages:
  1) Poussez ce repository sur GitHub (branche `main` ou `master`).
  2) Ouvrez Settings > Pages > Source: sélectionnez "GitHub Actions".
  3) Poussez une modification (ou lancez le workflow manuellement). Le site sera publié à l’URL affichée dans l’environnement "github-pages".

- Notes:
  - Si vous utilisez un domaine personnalisé, ajoutez un fichier `CNAME` à la racine du build (ou configurez-le dans les Pages Settings). Dans ce cas gardez `VITE_BASE=/`.
  - L’application n’utilise pas de routeur; il n’y a pas de configuration de fallback 404 spécifique à prévoir.

## Netlify

- Dossier de sortie Vite: le fichier `vite.config.ts` définit `build.outDir = "build"`. Le build génère donc un dossier `build/` (et non `dist/`).
- Erreur courante: si Netlify est configuré avec `Publish directory = dist`, le déploiement échouera avec "Deploy directory 'dist' does not exist".

- Correctif recommandé (UI Netlify):
  1) Netlify > Site settings > Build & deploy > Build settings > Edit settings.
  2) Build command: `npm run build`
  3) Publish directory: `build`
  4) Sauvegardez puis relancez un déploiement.

- Alternative (repo):
  - Un fichier `netlify.toml` est fourni à la racine avec:
    - `[build] command = "npm run build"`, `publish = "build"`
    - `[build.environment] VITE_BASE = "/"`
  - Attention: si les paramètres de build sont définis dans l’UI Netlify, ils prévalent sur `netlify.toml` (le journal Netlify affiche `commandOrigin: ui`, `publishOrigin: ui`). Mettez à jour l’UI comme ci-dessus ou réinitialisez-la pour prendre en compte `netlify.toml`.

- Environnements:
  - `VITE_BASE` est fixé à `/` pour Netlify (déploiement à la racine). Laissez cette valeur sauf cas particulier.

- Vérification locale:
  - Exécutez `npm run build` en local: vous devez voir un dossier `build/` contenant `index.html` et `assets/`. Si c’est le cas, Netlify doit publier ce même dossier.
