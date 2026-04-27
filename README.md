# Company Leaderboard Component

A React-based web component for displaying employee leaderboards with cascading filters, top-performers podium, and expandable per-employee activity history.

## Tech Stack

- **React** 18.3.1
- **Tailwind CSS** 3.3.6
- **Node.js** (for development)

## Features

- **Leaderboard header** — title and subtitle banner with indigo gradient.
- **Cascading filter bar** — Year → Quarter → Category dropdowns with smart dependent-disable logic and automatic downstream resets. A search bar filters across employee name, surname, department, and position.
- **Top-3 podium** — gold / silver / bronze cards arranged in the classic 2nd | 1st | 3rd visual order.
- **Ranked employee list** — sortable by points (descending), with responsive columns (rank, name, position, department, points).
- **Expandable activity rows** — click the chevron on any row to reveal a table of recent activities (activity name, category, date, points earned). Multiple rows can be expanded simultaneously.
- **Empty-state handling** — friendly message when no employees match the active filters.

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
│   │   ├── CompanyLeaderboard.jsx          # Main container
│   │   ├── LeaderboardHeader.jsx
│   │   ├── FilterSection/
│   │   │   ├── FilterSection.jsx
│   │   │   ├── YearDropdown.jsx
│   │   │   ├── QuarterDropdown.jsx
│   │   │   ├── CategoryDropdown.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── PodiumSection/
│   │   │   └── PodiumSection.jsx           # Includes inline PodiumCard
│   │   └── EmployeeListSection/
│   │       ├── EmployeeListSection.jsx
│   │       ├── EmployeeRow.jsx
│   │       └── RecentActivityPanel.jsx
│   └── common/
│       └── Dropdown.jsx                    # Reusable base dropdown
├── hooks/
│   └── useFilters.js                       # Filter state + derived data
├── utils/
│   └── filterUtils.js                      # Pure filter / sort helpers
├── data/
│   └── mockEmployeeData.js                 # Sample data (2024–2025)
├── App.jsx
├── index.jsx
└── index.css
```

## Implementation Notes

| Area | Status | Notes |
|---|---|---|
| React + Tailwind setup | ✅ | CRA + Tailwind 3 |
| LeaderboardHeader | ✅ | |
| FilterSection (all dropdowns + search) | ✅ | |
| Cascading filter logic | ✅ | Year → Quarter → Category resets |
| `useFilters` custom hook | ✅ | `useMemo` throughout |
| `filterUtils.js` helpers | ✅ | |
| Mock employee data | ✅ | 16 employees, 2024 Q1–Q4 + 2025 Q1–Q2 |
| PodiumSection (top-3 cards) | ✅ | Visual 2nd\|1st\|3rd order |
| EmployeeListSection + EmployeeRow | ✅ | Alternating hover, responsive columns |
| RecentActivityPanel | ✅ | Expandable activity table |
| Responsive design | ✅ | Tailwind `sm`/`md` breakpoints |
| Search scope | ✅ | Name, surname, department, **and position** (extends plan) |
| Reusable `Dropdown` component | ✅ | Not in original plan; added as common component |
| Search debounce (300 ms) | ⏭️ | Noted in plan; not yet applied |
| `useLocalStorage` hook | ⏭️ | Noted in plan; not yet implemented |
| `dataHelpers.js` utility | ⏭️ | Noted in plan; not yet implemented |

## Development Phases

### Phase 1: Core Structure ✅
- [x] Set up React project with Tailwind CSS
- [x] Create component skeleton structure
- [x] Build LeaderboardHeader component
- [x] Build FilterSection components

### Phase 2: Filtering Logic ✅
- [x] Implement filter state management
- [x] Implement cascading dropdown logic
- [x] Connect search bar to filtering
- [x] Create mock data and test filters

### Phase 3: Data Visualization ✅
- [x] Build PodiumSection with top-3 calculation
- [x] Build PodiumCard styling with medals
- [x] Build EmployeeListSection with row rendering
- [x] Add row expand/collapse functionality

### Phase 4: Activity Details & Polish ✅
- [x] Build RecentActivityPanel component
- [x] Add activity data to employee rows
- [x] Implement responsive design
- [x] Performance optimization (useMemo on all derived data)

## Documentation

See [TECHNICAL_PLAN.md](./TECHNICAL_PLAN.md) for detailed architecture and design decisions.

## License

MIT
