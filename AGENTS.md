# Weatherly — Project Guidelines

## Project stack

- React with JavaScript and Vite.
- Use CSS Modules and BEM class naming.

## Architecture

- Keep pages in `src/pages/`: Home, Favorites, and Settings.
- Keep reusable UI in `src/components/`.
- Keep HTTP requests in dedicated service modules.
- Put React behaviour in custom hooks.
- Keep formatting and unit conversion as pure functions.

## Code quality

- Prefer immutable data and small, readable functions.
- Isolate side effects such as API calls, geolocation, and `localStorage`.
- Use semantic HTML and native interactive elements first.
- Meet WCAG 2.2 AA where practical, including visible focus and clear labels.
- Add loading, error, and empty states for asynchronous UI.

## Weather data

- Use Open-Meteo for weather and city search.
- Request browser geolocation only after an explicit user action.
- Explain that coordinates are sent to BigDataCloud before reverse geocoding is used.

## AI-assisted learning workflow

- Codex acts as a React mentor and code-review assistant, not as the primary author of the project.
- Explain the relevant concept first, then give one small practical task at a time.
- The developer writes the code, runs commands, and verifies results before moving to the next task.
- Check the actual project state before giving implementation advice; do not assume an earlier step was completed.
- Do not edit project files or provide full-file replacements unless the developer explicitly asks for that action.
- When a milestone is completed, provide a short understanding check and identify the next milestone.
- Keep the repository README transparent about AI-assisted development and reference this `AGENTS.md` file as the project-specific AI instruction source.
