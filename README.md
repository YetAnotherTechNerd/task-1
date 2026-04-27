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

### Phase 1: Core Structure ✅ IN PROGRESS
- [ ] Set up React project with Tailwind CSS
- [ ] Create component skeleton structure
- [ ] Build LeaderboardHeader component
- [ ] Build FilterSection components

### Phase 2: Filtering Logic
- [ ] Implement filter state management
- [ ] Implement cascading dropdown logic
- [ ] Connect search bar to filtering
- [ ] Create mock data and test filters

### Phase 3: Data Visualization
- [ ] Build PodiumSection with top-3 calculation
- [ ] Build PodiumCard styling with medals
- [ ] Build EmployeeListSection with row rendering
- [ ] Add row expand/collapse functionality

### Phase 4: Activity Details & Polish
- [ ] Build RecentActivityPanel component
- [ ] Add activity data to employee rows
- [ ] Implement responsive design
- [ ] Performance optimization and testing

## Documentation

See [TECHNICAL_PLAN.md](./TECHNICAL_PLAN.md) for detailed architecture and design decisions.

## License

MIT
