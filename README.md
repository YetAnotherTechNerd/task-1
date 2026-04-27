# Company Leaderboard Component

A React-based web component for displaying employee leaderboards with filtering capabilities, top performers visualization, and activity tracking.

## Tech Stack

- **React** 18.3.1
- **Tailwind CSS** 3.3.6
- **Node.js** (for development)

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
│   ├── common/
│   └── ...
├── hooks/
├── utils/
├── data/
├── App.jsx
├── index.jsx
└── index.css
```

## Development Phases

### Phase 1: Core Structure ✅ COMPLETE
- [x] Set up React project with Tailwind CSS
- [x] Create component skeleton structure
- [x] Build LeaderboardHeader component
- [x] Build FilterSection components

### Phase 2: Filtering Logic ✅ COMPLETE
- [x] Implement filter state management (`useFilters` hook)
- [x] Implement cascading dropdown logic (Year → Quarter → Category)
- [x] Connect search bar to filtering (debounced, 300ms)
- [x] Create mock data and test filters (16 employees across 2024–2025)

### Phase 3: Data Visualization ✅ COMPLETE
- [x] Build PodiumSection with top-3 calculation
- [x] Build PodiumCard styling with medals (Gold / Silver / Bronze)
- [x] Build EmployeeListSection with row rendering
- [x] Add row expand/collapse functionality

### Phase 4: Activity Details & Polish ⏳ Pending
- [ ] Build RecentActivityPanel component
- [ ] Add activity data to employee rows
- [ ] Implement responsive design
- [ ] Performance optimization and testing

## Documentation

See [TECHNICAL_PLAN.md](./TECHNICAL_PLAN.md) for detailed architecture and design decisions.

## License

MIT
