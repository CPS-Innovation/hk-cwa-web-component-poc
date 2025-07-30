# HK CWA Web Component POC

A proof-of-concept React + Vite project for building and serving reusable web components (custom elements) styled with GOV.UK Frontend, with Storybook for component development and documentation.

## Features

- **React 19 + Vite** for fast development and builds
- **Custom Elements**: Components are exported as web components (e.g., `<status-tag>`)
- **Storybook** for isolated component development and documentation
- **GOV.UK Frontend** styles
- **TypeScript** for type safety
- **ESLint** for code quality
- **Zod** for schema validation

## Project Structure

```
src/
  components/
    [ComponentName]Component/
      [ComponentName].tsx         # React component
      [ComponentName]Component.tsx # Custom element wrapper
      [ComponentName].scss        # Styles
  stories/                        # Storybook stories
  types/                          # TypeScript custom element types
  schemas/                        # Zod schemas
public/                           # Static assets
```

## Scripts

- `npm run dev` — Start Vite dev server
- `npm run build` — Build the project for production
- `npm run preview` — Preview the production build
- `npm run lint` — Lint the codebase
- `npm run storybook` — Start Storybook for component development
- `npm run build-storybook` — Build static Storybook site
- `npm run serve` — Serve the built `dist` folder at http://localhost:5000

## Usage

### Serve the Build

After building, serve the `dist` folder:

```bash
npm run build
npm run serve
```

### Storybook

Develop and test components in isolation:

```bash
npm run storybook
```

## Custom Elements

Components are registered as custom elements (e.g., `<status-tag>`) and can be used in any HTML/JSX after registration. TypeScript types for custom elements are provided in `src/types/status-tag.d.ts`.

## Development

- Add new components in `src/components/`
- Write stories in `src/stories/`
- Ensure custom element types are declared globally in `src/types/`
- Use GOV.UK styles from `public/govuk-frontend.min.css`
