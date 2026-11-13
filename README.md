# Weatherly

A responsive weather dashboard built with React, JavaScript, and Vite. It currently uses mock weather data while API integration is in progress.

## Live demo

[Open Weatherly](https://weatherly-iota-two.vercel.app/)

## Current features

- Current weather card with temperature, condition, humidity, wind, and precipitation.
- Hourly and 7-day forecasts generated from mock data.
- Responsive dashboard layout with sidebar navigation.
- Home, Favorites, and Settings routes powered by React Router.
- Favorite city cards with client-side removal and an empty state.
- Accessible weather icons and visible keyboard focus states.

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually [http://localhost:5173/](http://localhost:5173/).

## Available commands

| Command           | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Starts the local development server with Hot Module Replacement. |
| `npm run lint`    | Runs Oxlint to check code quality.                               |
| `npm run build`   | Creates an optimized production build in `dist/`.                |
| `npm run preview` | Runs the production build locally for preview.                   |

## Project structure

- `src/components/` — reusable UI components, including `Sidebar`, `CurrentWeather`, `HourlyForecast`, `DailyForecast`, and `FavoriteCityList`.
- `src/data/` — mock weather and favorite-city data.
- `src/pages/` — route-level page components: `Home`, `Favorites`, and `Settings`.
- `src/utils/` — pure utility functions, including weather-condition icon mapping.
- `src/App.jsx` — application shell and route configuration.
- `src/App.module.css` — styles for the root responsive layout.
- `vercel.json` — Vercel configuration for React Router SPA routes.

## AI-assisted development

Weatherly is developed as a learning project with Codex acting as a React mentor and code-review assistant.

The developer writes and understands the code step by step. AI is used to explain concepts, review decisions, and suggest small, scoped changes.

Project-specific AI instructions are documented in [AGENTS.md](./AGENTS.md).
