# agents.md

## Project
Vite + React + TypeScript frontend using shadcn/ui and Tailwind CSS.

## Goals
- Write clean, maintainable code.
- Follow SOLID principles.
- Prefer simple, reusable, and testable solutions.
- Keep changes small and focused.
- Use Redux Toolkit for complex shared state only.

## Structure
Use a feature-based folder structure.

Example:
- `src/app/` for app setup, routing, and providers.
- `src/features/` for feature-specific code.
- `src/shared/` for reusable components, hooks, and utilities.
- `src/test/` for test setup and helpers.

## Rules
- Keep feature code inside its feature folder.
- Put shared code only in `shared`.
- Use shadcn/ui components before custom UI.
- Use Tailwind for styling.
- Keep components small and single-purpose.
- Avoid unnecessary abstraction and duplication.

## Testing
- Use Vitest and React Testing Library.
- Test user behavior, not implementation details.
- Add or update tests for any behavior change.
- Use `user-event` for interactions.

## Agent behavior
- Follow the feature-based structure.
- Write clean code that follows SOLID principles.
- Prefer readable, maintainable solutions.
- Make the smallest safe change that solves the task.