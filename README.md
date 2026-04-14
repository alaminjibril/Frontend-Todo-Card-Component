# Frontend Wizards Stage 0 - Todo Card Component

A clean, pixel-perfect, fully responsive todo card component built with vanilla HTML, CSS, and JavaScript. Designed to pass all automated tests while maintaining professional design standards.

## Features

✅ **Pixel-Perfect Design** — Apple-inspired minimalist aesthetic
✅ **Fully Responsive** — Works beautifully from 320px to 1200px+
✅ **Interactive Elements** — Checkbox toggle, edit/delete buttons with proper feedback
✅ **Real-Time Updates** — Time-remaining text updates every 60 seconds
✅ **Accessible** — Semantic HTML, ARIA labels, keyboard navigation, screen reader support
✅ **Test-Ready** — All required data-testid attributes included
✅ **No Dependencies** — Pure HTML, CSS, and vanilla JavaScript

## Features Explained

### Time Remaining
- Displays human-readable time remaining until the due date
- Updates every 60 seconds automatically
- Shows: "Due in X days", "Due tomorrow", "Due today", "Due in X hours", "Overdue by X hours"
- Target date: March 1, 2026, 6:00 PM UTC

### Checkbox Toggle
- Click to mark task as complete
- Title gets strikethrough when checked
- Status badge changes from "In Progress" to "Done"
- Visual state changes with the `.is-completed` class
- Uncheck to revert all changes

### Priority Badge
- Shows task priority level (High, Medium, Low)
- Color-coded: Red for High, Amber for Medium, Gray for Low
- Includes a small colored dot indicator

### Status Badge
- Displays current task status
- Changes color based on status (In Progress, Done, Pending)
- Updates when checkbox is toggled

### Tags/Categories
- Displays task tags as pill-shaped badges
- Supports Work, Urgent, Quarterly, and custom tags
- Responsive wrapping on smaller screens

### Buttons
- **Edit Button**: Logs "Edit clicked" to console
- **Delete Button**: Shows alert dialog "Task deleted"
- Both buttons are keyboard accessible and have focus states

## File Structure

```
frontend-stage0/
├── index.html          - HTML structure with semantic markup
├── style.css           - Responsive styling and layout
├── script.js           - JavaScript functionality
└── README.md           - This file
```

## HTML Structure (data-testid values)

```html
<!-- Root card container -->
<article data-testid="test-todo-card">
  <!-- Checkbox input (required) -->
  <input data-testid="test-todo-complete-toggle" />
  
  <!-- Title (h2 element) -->
  <h2 data-testid="test-todo-title">Complete quarterly reports</h2>
  
  <!-- Priority badge -->
  <span data-testid="test-todo-priority">High</span>
  
  <!-- Description -->
  <p data-testid="test-todo-description">...</p>
  
  <!-- Due date -->
  <time data-testid="test-todo-due-date">Due March 1, 2026</time>
  
  <!-- Time remaining -->
  <span data-testid="test-todo-time-remaining">Due in 19 days</span>
  
  <!-- Status badge -->
  <span data-testid="test-todo-status">In Progress</span>
  
  <!-- Tags container -->
  <div data-testid="test-todo-tags">
    <span data-testid="test-todo-tag-work">Work</span>
    <span data-testid="test-todo-tag-urgent">Urgent</span>
  </div>
  
  <!-- Action buttons -->
  <button data-testid="test-todo-edit-button">Edit</button>
  <button data-testid="test-todo-delete-button">Delete</button>
</article>
```

## Testing the Component

### 1. Checkbox Functionality
```
Click the checkbox
Expected: 
  - Title gets strikethrough
  - Status changes to "Done" (green badge)
  - Card gets "is-completed" class
Click again
Expected: All changes revert
```

### 2. Time Remaining
```
Open browser console (F12)
Watch the "Due in X days" text
Expected:
  - Shows reasonable value (e.g., "Due in 19 days")
  - Updates every 60 seconds (or refresh to see change)
  - Format changes based on time: days → hours → minutes → "Due now!" → overdue
```

### 3. Edit Button
```
Click the Edit button
Open browser DevTools Console (F12)
Expected: "Edit clicked" message appears in console
```

### 4. Delete Button
```
Click the Delete button
Expected: Alert dialog appears with "Task deleted" message
```

### 5. Responsive Design
```
Test on mobile (320px): Full width, stacked layout
Test on tablet (768px): Centered, comfortable spacing
Test on desktop (1200px): Maximum width respected, centered

Expected: Card looks good and is fully usable at all sizes
```

## CSS Highlights

- **CSS Variables**: Theme colors defined at root level for easy customization
- **Flexbox Layout**: Responsive, no floats or grid for simplicity
- **Custom Checkbox**: Styled using CSS, maintains accessibility
- **Responsive Breakpoints**:
  - Mobile-first: 320px - 640px
  - Tablet: 641px - 1024px
  - Desktop: 1025px and up
- **Accessibility**: Focus states, color contrast, semantic HTML

## JavaScript Functionality

### Time Calculation Logic
```javascript
- Target date: March 1, 2026, 6:00 PM UTC
- Calculates difference from current time
- If overdue: Shows "Overdue by X days/hours/minutes"
- If upcoming:
  - Less than 1 hour: "Due now!" or "Due in X minutes"
  - Same day: "Due today"
  - Next day: "Due tomorrow"
  - Otherwise: "Due in X days"
```

### Checkbox Toggle Logic
```javascript
- On check:
  - Add 'is-completed' class to card
  - Change status to 'Done'
  - Update badge class to 'status-badge--done'
- On uncheck:
  - Remove 'is-completed' class
  - Change status back to 'In Progress'
  - Update badge class to 'status-badge--in-progress'
```

## Accessibility Features

- ✅ **Semantic HTML**: Uses article, h2, time, button, label elements
- ✅ **ARIA Labels**: aria-label for visual-only elements, aria-live for dynamic content
- ✅ **Keyboard Navigation**: All interactive elements are keyboard accessible
- ✅ **Focus Styles**: Visible focus rings on all buttons and checkbox
- ✅ **Color Contrast**: WCAG AA compliant color ratios
- ✅ **Screen Readers**: Proper label associations and semantic structure
- ✅ **Visually Hidden Text**: Descriptions for screen readers only

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **No external dependencies** — Pure vanilla HTML/CSS/JS
- **Minimal DOM manipulation** — Efficient class and innerHTML updates
- **Lightweight** — index.html ~1KB, style.css ~4KB, script.js ~3KB
- **Smooth animations** — CSS transitions for visual feedback

## Author

Created for Frontend Wizards Stage 0 Assessment

## License

Open source - feel free to use as reference or starting point

---

## Submission Checklist

Before submitting, verify:

- [ ] All data-testid attributes are present and correct
- [ ] Checkbox toggle works (click → strikethrough → status change)
- [ ] Time remaining shows a reasonable value
- [ ] Edit button logs to console
- [ ] Delete button shows alert
- [ ] Card is responsive (test at 320px, 768px, 1200px)
- [ ] No console errors
- [ ] All buttons are keyboard focusable
- [ ] Focus rings are visible
- [ ] Color contrast is good
- [ ] Code is clean and commented
- [ ] README is included in repo

## Quick Start

1. Open `index.html` in a web browser
2. Interact with the card (checkbox, buttons)
3. Watch the time remaining update every minute
4. Test on different screen sizes
5. Check browser console (F12) for "Edit clicked" message

Enjoy! ✨
