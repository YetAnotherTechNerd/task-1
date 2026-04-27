# Company Leaderboard Component

A React-based web component for displaying employee leaderboards with filtering capabilities, top performers visualization, and activity tracking.

> **Last Updated:** 2026-04-27

## Current Status

**Phase 1: Core Structure** — 🔄 In Progress (50% complete)

| Step | Description | Status |
|------|-------------|--------|
| Step 1 | Set up React project with Tailwind CSS | ✅ Complete |
| Step 2 | Create component skeleton structure | ✅ Complete |
| Step 3 | Integrate Filters & Mock Data | 🔄 In Progress |
| Step 4 | Build LeaderboardHeader, FilterSection, PodiumSection | ⏳ Pending |

## Current Focus

**Step 3: Integrate Filters & Mock Data**

Currently building the core data and filtering layer:

- [ ] Mock employee data creation (`src/data/mockEmployeeData.js`)
- [ ] Filter utilities implementation (`src/utils/filterUtils.js`)
- [ ] `useFilters` hook implementation (`src/hooks/useFilters.js`)
- [ ] Component integration (wiring data & filters into `CompanyLeaderboard.jsx`)

## Tech Stack

- **React** 18.3.1
- **Tailwind CSS** 3.3.6
- **Node.js** (for development)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── CompanyLeaderboard/
│   │   ├── CompanyLeaderboard.jsx
│   │   ├── LeaderboardHeader.jsx
│   │   ├── FilterSection/
│   │   │   ├── FilterSection.jsx
│   │   │   ├── YearDropdown.jsx
│   │   │   ├── QuarterDropdown.jsx
│   │   │   ├── CategoryDropdown.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── PodiumSection/
│   │   │   ├── PodiumSection.jsx
│   │   │   └── PodiumCard.jsx
│   │   └── EmployeeListSection/
│   │       ├── EmployeeListSection.jsx
│   │       ├── EmployeeRow.jsx
│   │       └── RecentActivityPanel.jsx
│   └── common/
│       └── Dropdown.jsx
├── hooks/
│   └── useFilters.js
├── utils/
│   └── filterUtils.js
├── data/
│   └── mockEmployeeData.js
├── App.jsx
├── index.jsx
└── index.css
```

## Development Phases

### Phase 1: Core Structure 🔄 In Progress (50%)
- [x] Step 1: Set up React project with Tailwind CSS
- [x] Step 2: Create component skeleton structure
- [ ] Step 3: Integrate Filters & Mock Data *(in progress)*
  - [ ] Mock employee data creation
  - [ ] Filter utilities implementation
  - [ ] `useFilters` hook implementation
  - [ ] Component integration
- [ ] Step 4: Build LeaderboardHeader, FilterSection, PodiumSection components

### Phase 2: Filtering Logic ⏳ Pending (0%)
- [ ] Implement filter state management
- [ ] Implement cascading dropdown logic
- [ ] Connect search bar to filtering
- [ ] Create mock data and test filters

### Phase 3: Data Visualization ⏳ Pending (0%)
- [ ] Build PodiumSection with top-3 calculation
- [ ] Build PodiumCard styling with medals
- [ ] Build EmployeeListSection with row rendering
- [ ] Add row expand/collapse functionality

### Phase 4: Activity Details & Polish ⏳ Pending (0%)
- [ ] Build RecentActivityPanel component
- [ ] Add activity data to employee rows
- [ ] Implement responsive design
- [ ] Performance optimization and testing

## Troubleshooting

### `npm install` fails or node_modules issues
```bash
# Remove existing install and retry
rm -rf node_modules package-lock.json
npm install
```

### Tailwind CSS styles not applying
- Ensure `src/index.css` contains the Tailwind directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`).
- Confirm `tailwind.config.js` lists the correct content paths (e.g., `./src/**/*.{js,jsx}`).
- Restart the dev server after any config changes: `npm start`.

### Blank page or React not rendering
- Check the browser console for errors.
- Verify `public/index.html` contains `<div id="root"></div>`.
- Confirm `src/index.jsx` calls `ReactDOM.createRoot(document.getElementById('root'))`.

### Port 3000 already in use
```bash
# Start on a different port
PORT=3001 npm start
```

## Documentation

See [TECHNICAL_PLAN.md](./TECHNICAL_PLAN.md) for detailed architecture and design decisions.

## License

MIT
