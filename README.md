# Frontend Wizards Stage 1a - Advanced Todo Card Component

An extended, interactive, stateful todo card component built with vanilla HTML, CSS, and JavaScript. Takes the Stage 0 foundation and adds advanced features including edit mode, status control, expandable descriptions, and overdue indicators.

## What's New in Stage 1a

✨ **Extended from Stage 0** with:
- ✅ **Edit Mode** — Click Edit to modify task details via form
- ✅ **Status Control** — Dropdown to change status (Pending, In Progress, Done)
- ✅ **Expand/Collapse** — Toggle long descriptions
- ✅ **Overdue Indicator** — Visual warning when task is past due
- ✅ **Priority Enhancements** — Visual indicators for priority levels
- ✅ **Synced State** — Checkbox, status dropdown, and status badge stay in sync
- ✅ **Enhanced Accessibility** — aria-expanded, aria-controls, aria-live
- ✅ **Form Validation** — All fields validate before saving

## Core Features

### 1. Edit Mode
- Click the **Edit** button to enter edit mode
- Modal-like form appears with all editable fields
- Fill in:
  - **Title** — Task name
  - **Description** — Task details
  - **Priority** — Low, Medium, or High
  - **Due Date** — Date picker (format: YYYY-MM-DD)
- **Save** — Updates the card with new values
- **Cancel** — Closes form without saving changes
- Press **Escape** to quickly exit edit mode

### 2. Status Control
- **Status Dropdown** — Change task status directly
- Options: **Pending**, **In Progress**, **Done**
- Changes automatically sync:
  - Status badge updates color
  - Checkbox checks/unchecks
  - Time remaining updates (shows "Completed" if done)

### 3. Checkbox & Status Sync
- **Check Checkbox** → Status changes to "Done"
- **Uncheck Checkbox** → Status changes to "Pending"
- **Change Status Dropdown** → Checkbox checks/unchecks automatically
- **Select "Done"** → Card shows completed state (strikethrough, muted colors)

### 4. Expand/Collapse Descriptions
- Long descriptions (100+ characters) collapse by default
- **Read more** button appears for expanded content
- Click to expand and reveal full description
- Click **Read less** to collapse
- Smooth animation
- Fully keyboard accessible (aria-expanded, aria-controls)

### 5. Overdue Indicator
- **Visual warning** appears when due date has passed
- Card border turns **red**
- ⚠️ **Overdue** badge shows at top of card
- Time updates show: "Overdue by X days/hours/minutes"
- Indicator hides when task is marked Done

### 6. Priority Visual Enhancements
- **Color-coded priority dot** (colored circle next to priority text)
- **Background colors:**
  - High: Red background (#FEE2E2)
  - Medium: Amber background (#FEF3C7)
  - Low: Gray background (#F3F4F6)
- Priority can be changed in edit mode

### 7. Time Remaining Management
- Updates every **45 seconds** (optimized from 60s)
- **Granular time display:**
  - "Due in 2 days"
  - "Due in 3 hours"
  - "Due in 45 minutes"
  - "Due now!"
  - "Overdue by 1 hour"
- When task is marked **Done**: Shows "Completed" instead of time
- Time updates stop for completed tasks

## File Structure

```
frontend-stage1a/
├── index.html          - HTML structure with edit form
├── style.css           - Advanced responsive styling
├── script.js           - State management & interactions
└── README.md           - This file
```

## Data-testid Reference (Complete List)

### Stage 0 Elements (Still Present)
```
test-todo-card                    - Root article element
test-todo-complete-toggle         - Checkbox input
test-todo-title                   - Task title (h2)
test-todo-priority                - Priority badge
test-todo-priority-indicator      - Priority dot
test-todo-description             - Description text
test-todo-due-date                - Due date time element
test-todo-time-remaining          - Time remaining span
test-todo-status                  - Status badge
test-todo-tags                    - Tags container
test-todo-tag-work                - Work tag
test-todo-tag-urgent              - Urgent tag
test-todo-edit-button             - Edit button
test-todo-delete-button           - Delete button
```

### Stage 1a New Elements
```
test-todo-overdue-indicator       - Overdue warning (visible when past due)
test-todo-expand-toggle           - Expand/Collapse button
test-todo-collapsible-section     - Hidden description container
test-todo-status-control          - Status dropdown select
test-todo-edit-form               - Edit form container
test-todo-edit-title-input        - Edit title input field
test-todo-edit-description-input  - Edit description textarea
test-todo-edit-priority-select    - Edit priority dropdown
test-todo-edit-due-date-input     - Edit due date input
test-todo-save-button             - Save button in form
test-todo-cancel-button           - Cancel button in form
```

## Testing the Features

### 1. Edit Mode
```
1. Click Edit button
   Expected: View mode hides, form appears with current values
2. Change title to "New Task Title"
3. Change description to "New description text"
4. Change priority to "Low"
5. Change due date to a future date
6. Click Save
   Expected: Form closes, card displays new values
7. Click Edit again
   Expected: Form shows the saved values
8. Make a change, click Cancel
   Expected: Changes don't save, form closes
```

### 2. Status Control
```
1. Status is "In Progress" initially
2. Click status dropdown, select "Done"
   Expected: 
   - Checkbox becomes checked
   - Title gets strikethrough
   - Status badge turns green
   - Time shows "Completed"
3. Change status back to "Pending"
   Expected:
   - Checkbox unchecks
   - Strikethrough removes
   - Badge turns amber
   - Time resumes updating
4. Check checkbox manually
   Expected: Status dropdown changes to "Done"
```

### 3. Expand/Collapse
```
1. Description is longer than 100 characters
2. "Read more" button should be visible
3. Click "Read more"
   Expected: 
   - Collapsible section expands smoothly
   - Button text changes to "Read less"
   - aria-expanded changes to "true"
4. Click "Read less"
   Expected:
   - Section collapses
   - Button text back to "Read more"
   - aria-expanded back to "false"
```

### 4. Overdue Indicator
```
1. Edit task and set due date to a past date (e.g., 2026-01-01)
2. Save
   Expected:
   - Red overdue indicator appears
   - Card border turns red
   - Time shows "Overdue by X days"
3. Mark task as Done
   Expected:
   - Overdue indicator hides
   - Time shows "Completed"
4. Change status back to Pending
   Expected:
   - Overdue indicator shows again
```

### 5. Keyboard Navigation
```
Tab through elements in order:
1. Checkbox
2. Status dropdown
3. Expand toggle (if visible)
4. Edit button
5. Delete button

In edit mode:
1. Tab through form fields
2. Press Escape → Form closes
3. Focus returns to Edit button
```

### 6. Responsive Design
```
Mobile (320px):
- Card full width
- Form fields stack vertically
- Buttons full width

Tablet (768px):
- Card max-width respected
- Centered on screen
- Form fields still stacked

Desktop (1024px+):
- Card max-width 520px
- Status and priority may align
- Form actions side-by-side
```

## Accessibility Features

- ✅ **Semantic HTML** — article, form, input, textarea, select, button, label, time
- ✅ **ARIA Attributes:**
  - aria-expanded on expand toggle
  - aria-controls linking toggle to section
  - aria-live="polite" on time-remaining
  - aria-label on priority indicator
- ✅ **Form Labels** — All inputs have associated labels
- ✅ **Keyboard Navigation:**
  - Tab through all interactive elements
  - Escape exits edit mode
  - Enter submits form
  - Space/Enter activates buttons
- ✅ **Focus Management:**
  - Visible focus rings on all focusable elements
  - Focus returns to Edit button when form closes
  - Form field focus on edit mode open
- ✅ **Color Contrast** — WCAG AA compliant
- ✅ **Screen Readers:**
  - Proper label associations
  - Semantic structure
  - ARIA labels for icon-only elements

## CSS Architecture

### Color System
```css
--color-white: #FFFFFF
--color-text-primary: #1F2937
--color-text-secondary: #6B7280
--color-accent: #2563EB
--color-border: #E5E7EB
--color-red: #EF4444

Status Colors:
--color-status-pending: #F59E0B (Amber)
--color-status-progress: #3B82F6 (Blue)
--color-status-done: #10B981 (Green)

Priority Colors:
--color-priority-high: #EF4444 (Red)
--color-priority-medium: #F59E0B (Amber)
--color-priority-low: #6B7280 (Gray)
```

### Responsive Breakpoints
```
Mobile: 320px - 640px
Tablet: 641px - 1024px
Desktop: 1025px+
```

### Key Classes
- `.todo-card` — Root container
- `.todo-card.is-completed` — Completed state (strikethrough, muted)
- `.todo-card.is-overdue` — Overdue state (red border)
- `.todo-edit-form` — Form styling
- `.todo-collapsible-section.expanded` — Expanded state

## State Management

The card maintains internal state:
```javascript
{
  title: "Task name",
  description: "Task details",
  priority: "High",        // "Low", "Medium", or "High"
  dueDate: "2026-03-01",  // Format: YYYY-MM-DD
  status: "In Progress",  // "Pending", "In Progress", or "Done"
  isCompleted: false      // Synced with checkbox and status
}
```

All state changes sync across:
- Form fields
- Checkbox state
- Status dropdown
- Status badge
- Visual styling

## JavaScript Features

### State Sync Functions
- `syncCheckboxAndStatus()` — Updates state when checkbox changes
- `syncStatusAndCheckbox()` — Updates state when dropdown changes
- `updateStatusVisual()` — Applies CSS classes based on status
- `updatePriorityVisual()` — Updates priority display
- `updateTheTime()` — Calculates and displays time remaining

### Edit Mode Functions
- `enterEditMode()` — Shows form, hides buttons
- `exitEditMode()` — Hides form, shows buttons
- `saveChanges()` — Validates and saves form data

### Time Functions
- `formatTimeRemaining()` — Converts ms difference to readable text
- Updates every 45 seconds
- Handles overdue dates correctly

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **No external dependencies** — Pure vanilla HTML/CSS/JS
- **Minimal DOM manipulation** — Efficient updates
- **Lightweight:**
  - index.html ~2KB
  - style.css ~8KB
  - script.js ~6KB
- **Smooth animations** — CSS transitions and JavaScript timing
- **Optimized intervals** — Time updates every 45 seconds (not every second)

## Known Limitations

- Edit form is not a true modal (no focus trapping)
- Can be extended with: localStorage persistence, animations, undo/redo
- Date picker is browser-native (may vary by browser)
- No validation for past due dates in form (user can set any date)

## Future Enhancements

- Subtasks/checklist support
- Due date and time picker (not just date)
- Recurring tasks
- Task categories/projects
- Data persistence (localStorage/backend)
- Drag and drop reordering
- Animations on state changes
- Dark mode support
- Export as JSON/PDF

## Changes from Stage 0

### Added Features
- ✨ Full edit mode with form
- ✨ Status dropdown control
- ✨ Expand/collapse for descriptions
- ✨ Overdue indicator
- ✨ Enhanced state management
- ✨ Better sync between elements

### Improved Accessibility
- Improved ARIA attributes
- Better keyboard navigation
- Form labels and validation
- Focus management

### Enhanced Styling
- More interactive visual states
- Form styling
- Smooth transitions
- Better responsive design

### Better State Management
- Centralized state object
- Sync functions for all interactions
- Proper cleanup on mode changes

## Testing Checklist

Before submission:

- [ ] Edit form appears/disappears correctly
- [ ] Save updates all card values
- [ ] Cancel closes form without saving
- [ ] Status dropdown syncs with checkbox
- [ ] Checkbox syncs with status dropdown
- [ ] Expand/collapse works smoothly
- [ ] Overdue indicator shows/hides correctly
- [ ] Time updates every 45 seconds
- [ ] All focus rings visible
- [ ] All buttons keyboard accessible
- [ ] Form fields keyboard accessible
- [ ] Escape key exits edit mode
- [ ] Tab order is logical
- [ ] Mobile layout is responsive
- [ ] Tablet layout is responsive
- [ ] Desktop layout is responsive
- [ ] No console errors
- [ ] All data-testid attributes present

## Quick Start

1. **Open in browser:** Double-click `index.html`
2. **Test edit mode:** Click Edit, change values, Save
3. **Test status:** Change status dropdown or check checkbox
4. **Test expand:** Click "Read more" if visible
5. **Test overdue:** Edit to past date and check indicator
6. **Test responsive:** Resize browser window

## Author

Created for Frontend Wizards Stage 1a Assessment

## License

Open source - feel free to use as reference or starting point

---

**Live Demo:** [Your GitHub Pages URL]
**GitHub Repo:** [Your GitHub Repository URL]

Enjoy the advanced todo card! ✨