Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173/`.

## Quality checks

Run the linter before committing changes:

```bash
npm run lint
```

## Production build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure

- `src/components/` — reusable UI components.
- `src/data/` — mock data and, later, data-related modules.
- `src/App.jsx` — the root application component.
- `src/App.module.css` — styles for the root application layout.
- `src/components/CurrentWeather/` — the current weather UI component and its styles.

## AI-assisted development

Weatherly is developed as a learning project with Codex acting as a React mentor and code-review assistant.
The developer writes and understands the code step by step. AI is used to explain concepts, review decisions, and suggest small, scoped changes.
Project-specific AI instructions are documented in [AGENTS.md](./AGENTS.md).
