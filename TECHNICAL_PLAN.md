# Company Leaderboard Web Component - Technical Plan

## Project Overview
A React-based web component for displaying employee leaderboards with filtering capabilities, top performers visualization, and activity tracking.

**Technology Stack:** React + Tailwind CSS

---

## 1. Component Structure

### 1.1 Main Component Hierarchy

```
CompanyLeaderboard (Main Container)
├── LeaderboardHeader
│   ├── Title ("Leaderboard")
│   └── Subtitle ("Top performers based on contributions and activity")
│
├── FilterSection
│   ├── YearDropdown
│   ├── QuarterDropdown
│   ├── CategoryDropdown
│   └── SearchBar
│
├── PodiumSection (Top-3 Performers)
│   ├── PodiumCard (Medal 1st - Gold)
│   ├── PodiumCard (Medal 2nd - Silver)
│   └── PodiumCard (Medal 3rd - Bronze)
│
└── EmployeeListSection
    ├── ListHeader (Column Labels)
    └── EmployeeRow[] (Expandable Rows)
        ├── EmployeeInfo (Name, Surname, Department)
        ├── PointsDisplay
        ├── ExpandToggle (Button)
        └── RecentActivityPanel (Expandable)
            ├── ActivityItem[]
            │   ├── Activity Name
            │   ├── Category
            │   ├── Date
            │   └── Points
```

### 1.2 Component Breakdown

| Component | Purpose | Props | State |
|-----------|---------|-------|-------|
| **CompanyLeaderboard** | Main container, manages filter state | `data`, `onFilterChange` | `filters`, `expandedRows`, `filteredData` |
| **LeaderboardHeader** | Displays title and subtitle | `title`, `subtitle` | None |
| **FilterSection** | Manages all filtering dropdowns | `years`, `quarters`, `categories`, `onFilterChange` | `selectedYear`, `selectedQuarter`, `selectedCategory`, `searchQuery` |
| **YearDropdown** | Year selector | `years`, `selected`, `onChange` | None (Controlled) |
| **QuarterDropdown** | Quarter selector | `quarters`, `selected`, `onChange` | None (Controlled) |
| **CategoryDropdown** | Category selector | `categories`, `selected`, `onChange` | None (Controlled) |
| **SearchBar** | Employee search | `onSearch` | None (Controlled) |
| **PodiumSection** | Displays top 3 performers | `topThree` | None |
| **PodiumCard** | Individual podium entry | `position`, `employee`, `medal` | None |
| **EmployeeListSection** | Renders employee list | `employees`, `expandedRows`, `onToggleExpand` | None |
| **EmployeeRow** | Individual employee entry | `employee`, `isExpanded`, `onToggle` | None |
| **RecentActivityPanel** | Expandable activity details | `activities`, `isExpanded` | None |

---

## 2. State Management & Data Flow

### 2.1 Main State Structure (CompanyLeaderboard)

```javascript
const [filters, setFilters] = useState({
  year: null,           // e.g., "2025"
  quarter: null,        // e.g., "Q1"
  category: null,       // e.g., "Sales", "Engineering"
  searchQuery: ""       // e.g., "John"
});

const [expandedRows, setExpandedRows] = useState(new Set()); // Track which employee rows are expanded

const [filteredData, setFilteredData] = useState([]); // Cache filtered employees
```

### 2.2 Data Flow Diagram

```
Raw Data
    ↓
Filter by Year
    ↓
Filter by Quarter
    ↓
Filter by Category
    ↓
Filter by Search Query
    ↓
Sort by Points (Descending)
    ↓
Identify Top-3 → PodiumSection
Full List → EmployeeListSection
```

---

## 3. Filtering Logic (Interconnected Dropdowns)

### 3.1 Design Pattern: Cascading Filters

The dropdowns are **interconnected** because:
- Selecting a **Year** may limit available **Quarters**
- Selecting a **Quarter** may limit available **Categories**
- Selecting a **Category** filters the employee list

### 3.2 Implementation Strategy

#### Step 1: Available Options Calculation
```javascript
// Calculate available years from raw data
const getAvailableYears = (data) => [...new Set(data.map(e => e.year))];

// Calculate available quarters for selected year
const getAvailableQuarters = (data, year) => {
  if (!year) return getAvailableQuarters(data, null);
  return [...new Set(data.filter(e => e.year === year).map(e => e.quarter))];
};

// Calculate available categories for selected year + quarter
const getAvailableCategories = (data, year, quarter) => {
  let filtered = data;
  if (year) filtered = filtered.filter(e => e.year === year);
  if (quarter) filtered = filtered.filter(e => e.quarter === quarter);
  return [...new Set(filtered.map(e => e.category))];
};
```

#### Step 2: Main Filter Application
```javascript
const applyFilters = (rawData, filters) => {
  let result = rawData;

  // Apply each filter sequentially
  if (filters.year) {
    result = result.filter(e => e.year === filters.year);
  }
  if (filters.quarter) {
    result = result.filter(e => e.quarter === filters.quarter);
  }
  if (filters.category) {
    result = result.filter(e => e.category === filters.category);
  }
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    result = result.filter(e =>
      e.name.toLowerCase().includes(query) ||
      e.surname.toLowerCase().includes(query) ||
      e.department.toLowerCase().includes(query)
    );
  }

  // Sort by points descending
  return result.sort((a, b) => b.points - a.points);
};
```

#### Step 3: Handle Dropdown Changes
```javascript
const handleFilterChange = (filterType, value) => {
  const newFilters = { ...filters, [filterType]: value };

  // Smart reset: If changing year, reset quarter & category
  if (filterType === 'year') {
    newFilters.quarter = null;
    newFilters.category = null;
  }
  // If changing quarter, reset category
  else if (filterType === 'quarter') {
    newFilters.category = null;
  }

  setFilters(newFilters);
  setFilteredData(applyFilters(rawData, newFilters));
};
```

### 3.3 Cascading Behavior

| Action | Result |
|--------|--------|
| User selects **Year 2025** | Quarter dropdown updates to show only Q1-Q4 from 2025 |
| User then selects **Q2** | Category dropdown updates to show only categories active in 2025 Q2 |
| User then selects **Category "Sales"** | Employee list filters to show Sales employees from 2025 Q2 |
| User changes **Year to 2024** | Quarter and Category reset to null; dropdowns repopulate |

---

## 4. Data Structure (Expected Input Format)

### 4.1 Raw Employee Data

```javascript
const employeeData = [
  {
    id: "emp_001",
    name: "John",
    surname: "Doe",
    position: "Senior Developer",
    department: "Engineering",
    year: 2025,
    quarter: "Q1",
    category: "Code Quality",
    points: 450,
    recentActivities: [
      {
        id: "act_001",
        name: "Pull Request Review",
        category: "Code Quality",
        date: "2025-03-15",
        points: 50
      },
      {
        id: "act_002",
        name: "Bug Fix",
        category: "Code Quality",
        date: "2025-03-10",
        points: 100
      }
    ]
  },
  {
    id: "emp_002",
    name: "Jane",
    surname: "Smith",
    position: "Sales Manager",
    department: "Sales",
    year: 2025,
    quarter: "Q2",
    category: "Revenue",
    points: 520,
    recentActivities: [
      {
        id: "act_003",
        name: "New Client Acquisition",
        category: "Revenue",
        date: "2025-04-20",
        points: 200
      }
    ]
  }
  // ... more employees
];
```

### 4.2 Aggregated Data Structure (for easier filtering)

```javascript
const aggregatedData = {
  years: ["2024", "2025", "2026"],
  quarters: ["Q1", "Q2", "Q3", "Q4"],
  categories: ["Code Quality", "Revenue", "Customer Service", "Innovation"],
  employees: [/* as above */]
};
```

---

## 5. UI/UX Specifications

### 5.1 Header Section
- **Title:** "Leaderboard" (Large, bold, Tailwind: `text-4xl font-bold`)
- **Subtitle:** "Top performers based on contributions and activity" (Tailwind: `text-lg text-gray-600`)
- **Background:** Light gradient or solid color (Tailwind: `bg-gradient-to-r from-blue-50 to-indigo-50`)

### 5.2 Filter Section
- **Layout:** Flex row with responsive wrapping
- **Year Dropdown:** `w-32` with placeholder "Select Year"
- **Quarter Dropdown:** `w-32` with placeholder "Select Quarter" (disabled if no year selected)
- **Category Dropdown:** `w-40` with placeholder "Select Category" (disabled if no filters selected)
- **Search Bar:** `flex-1` min-width `250px` with search icon
- **Styling:** Tailwind inputs with `border`, `rounded`, `focus:ring-2`

### 5.3 Podium Section (Top-3)
- **Layout:** Three cards in a row (responsive to 1-2 columns on mobile)
- **Medal Styling:**
  - 1st Place: Gold background (`bg-yellow-100`), gold border (`border-yellow-400`)
  - 2nd Place: Silver background (`bg-gray-100`), silver border (`border-gray-400`)
  - 3rd Place: Bronze background (`bg-orange-100`), bronze border (`border-orange-400`)
- **Card Content:**
  - Medal emoji/icon at top
  - Employee name & surname
  - Position & department (smaller, gray text)
  - Points (large, bold)
- **Card Height:** `h-48` with shadow and rounded corners

### 5.4 Employee List Section
- **Table/List Structure:**
  - Column headers: Name | Position | Department | Points | [Expand Button]
  - Responsive: Stack on mobile, table on desktop
- **Row Styling:** Alternating row colors (`odd:bg-white even:bg-gray-50`)
- **Expand Button:** Chevron icon, toggles expanded state
- **Expanded Content:** 
  - "RECENT ACTIVITY" section (full width under row)
  - Activity items displayed as cards or list
  - Show: Activity Name, Category, Date, Points

---

## 6. Event Handling & Interactions

### 6.1 Filter Interactions

```javascript
// Year dropdown change
<YearDropdown 
  years={availableYears}
  selected={filters.year}
  onChange={(year) => handleFilterChange('year', year)}
/>

// Quarter dropdown change (only if year is selected)
<QuarterDropdown 
  quarters={availableQuarters}
  selected={filters.quarter}
  onChange={(quarter) => handleFilterChange('quarter', quarter)}
  disabled={!filters.year}
/>

// Category dropdown change
<CategoryDropdown 
  categories={availableCategories}
  selected={filters.category}
  onChange={(category) => handleFilterChange('category', category)}
  disabled={!filters.year && !filters.quarter}
/>

// Search bar change
<SearchBar 
  value={filters.searchQuery}
  onChange={(query) => handleFilterChange('searchQuery', query)}
/>
```

### 6.2 Row Expansion Interaction

```javascript
const toggleRowExpansion = (employeeId) => {
  const newExpanded = new Set(expandedRows);
  if (newExpanded.has(employeeId)) {
    newExpanded.delete(employeeId);
  } else {
    newExpanded.add(employeeId);
  }
  setExpandedRows(newExpanded);
};
```

---

## 7. Performance Considerations

### 7.1 Optimization Strategies
- **Memoization:** Use `useMemo()` for filtered data calculation to avoid recalculation on every render
- **Lazy Rendering:** Only render visible activity items (virtualization if list is large)
- **Debouncing:** Debounce search input with 300ms delay to reduce filter recalculations

### 7.2 Sample Implementation
```javascript
const filteredData = useMemo(() => {
  return applyFilters(rawData, filters);
}, [filters, rawData]);

const handleSearch = useMemo(
  () => debounce((query) => handleFilterChange('searchQuery', query), 300),
  []
);
```

---

## 8. Responsive Design

### 8.1 Breakpoints (Tailwind)
- **Mobile (sm < 640px):** Single column filters, stacked podium, table → list view
- **Tablet (md 768px):** Two column filters, side-by-side podium pairs, condensed table
- **Desktop (lg 1024px+):** Full 4-column filter row, three-card podium row, full table

### 8.2 Mobile Adaptations
- Filters stack vertically with full width
- Podium cards reduce in height, font size scales down
- Employee list becomes card-based instead of table
- Expand button becomes more prominent

---

## 9. File Structure (Proposed)

```
src/
├── components/
│   ├── CompanyLeaderboard/
│   │   ├── CompanyLeaderboard.jsx         # Main container
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
│   │   ├── EmployeeListSection/
│   │   │   ├── EmployeeListSection.jsx
│   │   │   ├── EmployeeRow.jsx
│   │   │   └── RecentActivityPanel.jsx
│   │   └── CompanyLeaderboard.module.css  # Optional: Tailwind utilities
│   └── ...
├── hooks/
│   ├── useFilters.js                      # Custom hook for filter logic
│   └── useLocalStorage.js
├── utils/
│   ├── filterUtils.js                     # Filter helper functions
│   └── dataHelpers.js
├── data/
│   └── mockEmployeeData.js                # Sample data for development
└── App.jsx
```

---

## 10. Development Phases

### Phase 1: Core Structure (Week 1)
- [ ] Set up React project with Tailwind CSS
- [ ] Create component skeleton structure
- [ ] Build LeaderboardHeader component
- [ ] Build FilterSection components (basic dropdowns)

### Phase 2: Filtering Logic (Week 2)
- [ ] Implement filter state management
- [ ] Implement cascading dropdown logic
- [ ] Connect search bar to filtering
- [ ] Create mock data and test filters

### Phase 3: Data Visualization (Week 3)
- [ ] Build PodiumSection with top-3 calculation
- [ ] Build PodiumCard styling with medals
- [ ] Build EmployeeListSection with row rendering
- [ ] Add row expand/collapse functionality

### Phase 4: Activity Details & Polish (Week 4)
- [ ] Build RecentActivityPanel component
- [ ] Add activity data to employee rows
- [ ] Implement responsive design
- [ ] Performance optimization and testing

---

## 11. Key Design Decisions

1. **Dropdown Interdependency:** Year → Quarter → Category (cascading resets)
2. **Sorting:** Always sort by points descending after filtering
3. **Expansion:** Multiple rows can be expanded simultaneously
4. **Search Scope:** Search across Name, Surname, and Department
5. **Responsive:** Mobile-first design approach with Tailwind breakpoints

---

## 12. Dependencies

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x"
  },
  "devDependencies": {
    "tailwindcss": "^3.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x"
  }
}
```

---

## 13. Next Steps

1. **Review & Feedback:** Confirm this technical plan aligns with requirements
2. **Create Mock Data:** Prepare sample employee data matching the structure
3. **Begin Implementation:** Start with Phase 1 (component structure)
4. **Iterate:** Build components incrementally with testing

---

**Document Version:** 1.0  
**Last Updated:** 2026-04-27  
**Author:** Technical Planning Team
