# Yakaboo UI Tests (Playwright + TypeScript)

Automated UI tests for **yakaboo.ua** using Playwright with Page Object Model

## Tech Stack
- Playwright Test Runner
- TypeScript
- Page Object Model

## Project Structure
src/pages/ → Page Objects (Home, Header, Side Menu)
fixtures/ → Playwright fixtures
tests/ → Test specs


## Run Tests

npx playwright test

Implemented Test Scenarios

Sidebar opens on menu button click
Books categories list opens and contains expected items
Sidebar closes on close button click