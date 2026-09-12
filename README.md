# Create React App on One9x Pages

A minimal Create React App starter, wired to deploy to [One9x Pages](https://one9x.com)
on every push. **Use this template** to start from it, or read it as a reference
for an app you already have.

```sh
npm run build
one9x pages release ./build --site mysite --spa --deploy
```

`--spa` is on: this app routes in the browser, so any unmatched path is served
`/index.html` instead of a 404.

## Turn on the deploy workflow

`.github/workflows/deploy.yml` is already here. It needs two settings, both
under **Settings → Secrets and variables → Actions**:

| | Name | Value |
| --- | --- | --- |
| Variable | `ONE9X_SITE` | the site to deploy to |
| Secret | `ONE9X_TOKEN` | `one9x tokens create "github actions"` |

Create the site first:

```sh
one9x pages create mysite
```

Until `ONE9X_SITE` exists the job is **skipped**, not failed — a fresh copy of
this template should not open with a red X.

Once both are set: a pull request stages a release and comments the preview
URL, and a push to `main` publishes.

## Local development

```sh
npm install
npm run dev
```

## A note on CRA

Create React App is no longer maintained upstream. This template exists because
plenty of real repositories still are one, and they deploy fine. **For something
new, use [the Vite template](https://github.com/one9x/template-vite)** — the
deploy command is identical.

Two CRA-specific things worth knowing:

- **`homepage` in `package.json`.** If it points at a subdirectory (a leftover
  from GitHub Pages), the build writes asset URLs under that path and the site
  loads blank. On a One9x site you are at the root of your own subdomain.
- **Source maps.** CRA emits them by default. The workflow here builds with
  `GENERATE_SOURCEMAP=false`; `--exclude '*.map'` at release time is the other
  way.

## Docs

- [Create React App on One9x Pages](https://one9x.com/docs/frameworks/create-react-app) — the
  build command, the output folder, and the gotchas for this framework
- [All frameworks](https://one9x.com/docs/frameworks)
- [GitHub Actions](https://one9x.com/docs/github-actions)

## License

MIT
