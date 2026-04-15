// Advanced Stage 1a Todo Card
window.onload = function () {
  // Target date
  let myTargetDate = new Date("2026-03-01T18:00:00Z");

  // DOM Elements
  const theTimeText = document.querySelector('[data-testid="test-todo-time-remaining"]');
  const myCheckbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
  const theCardBox = document.querySelector('[data-testid="test-todo-card"]');
  const badgeStatus = document.querySelector('[data-testid="test-todo-status"]');
  const theTitle = document.querySelector('[data-testid="test-todo-title"]');
  const theDescription = document.querySelector('[data-testid="test-todo-description"]');
  const thePriority = document.querySelector('[data-testid="test-todo-priority"]');
  const priorityDot = document.querySelector('[data-testid="test-todo-priority-indicator"]');

  // Edit Mode Elements
  const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
  const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');
  const editMode = document.getElementById('edit-mode');
  const editForm = document.getElementById('todo-edit-form');
  const editTitle = document.querySelector('[data-testid="test-todo-edit-title-input"]');
  const editDescription = document.querySelector('[data-testid="test-todo-edit-description-input"]');
  const editPriority = document.querySelector('[data-testid="test-todo-edit-priority-select"]');
  const editDueDate = document.querySelector('[data-testid="test-todo-edit-due-date-input"]');
  const saveBtn = document.querySelector('[data-testid="test-todo-save-button"]');
  const cancelBtn = document.querySelector('[data-testid="test-todo-cancel-button"]');
  const actionsView = document.getElementById('actions-view');

  // Status Control Elements
  const statusControl = document.querySelector('[data-testid="test-todo-status-control"]');

  // Expand/Collapse Elements
  const expandToggle = document.querySelector('[data-testid="test-todo-expand-toggle"]');
  const collapsibleSection = document.querySelector('[data-testid="test-todo-collapsible-section"]');
  const descriptionSection = document.querySelector('.todo-card__description-section');

  // Overdue Indicator
  const overdueIndicator = document.querySelector('[data-testid="test-todo-overdue-indicator"]');

  // State Management
  let currentState = {
    title: "Complete quarterly reports",
    description: "Review and finalize Q1 financial reports. Include team feedback and update forecasts.",
    priority: "High",
    dueDate: "2026-03-01",
    status: "In Progress",
    isCompleted: false
  };

  let isEditMode = false;

  // Format Time Remaining
  function formatTimeRemaining(diffTime) {
    if (diffTime < 0) {
      const negativeDiff = Math.abs(diffTime);
      const daysOver = Math.floor(negativeDiff / 1000 / 60 / 60 / 24);
      const hoursOver = Math.floor((negativeDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
      const minsOver = Math.floor((negativeDiff % (1000 * 60 * 60)) / 1000 / 60);

      if (daysOver > 0) return daysOver === 1 ? "Overdue by 1 day" : "Overdue by " + daysOver + " days";
      if (hoursOver > 0) return hoursOver === 1 ? "Overdue by 1 hour" : "Overdue by " + hoursOver + " hours";
      return minsOver === 1 ? "Overdue by 1 minute" : "Overdue by " + minsOver + " minutes";
    } else {
      const t1 = new Date();
      t1.setHours(0, 0, 0, 0);
      const t2 = new Date(myTargetDate.getTime());
      t2.setHours(0, 0, 0, 0);

      const theDayDifference = (t2.getTime() - t1.getTime()) / (1000 * 60 * 60 * 24);
      const theDayDifferenceRounded = Math.round(theDayDifference);

      const minutesLeft = Math.floor(diffTime / 1000 / 60);

      if (minutesLeft < 1) return "Due now!";
      if (minutesLeft < 60) return minutesLeft === 1 ? "Due in 1 minute" : "Due in " + minutesLeft + " minutes";
      if (theDayDifferenceRounded === 0) return "Due today";
      if (theDayDifferenceRounded === 1) return "Due tomorrow";
      return "Due in " + theDayDifferenceRounded + " days";
    }
  }

  // Update Time
  function updateTheTime() {
    if (currentState.isCompleted) {
      theTimeText.innerHTML = "Completed";
      return;
    }

    const dateNow = new Date();
    const diffTime = myTargetDate.getTime() - dateNow.getTime();
    theTimeText.innerHTML = formatTimeRemaining(diffTime);

    // Show/hide overdue indicator
    if (diffTime < 0) {
      overdueIndicator.style.display = 'block';
      theCardBox.classList.add('is-overdue');
    } else {
      overdueIndicator.style.display = 'none';
      theCardBox.classList.remove('is-overdue');
    }
  }

  // Update Priority Visual
  function updatePriorityVisual() {
    const priorityClass = `todo-priority--${currentState.priority.toLowerCase()}`;
    thePriority.className = 'todo-priority ' + priorityClass;
    thePriority.innerHTML = `<span class="priority-dot" data-testid="test-todo-priority-indicator"></span>${currentState.priority}`;
  }

  // Update Status Visual
  function updateStatusVisual() {
    const statusClass = `status-badge--${currentState.status.toLowerCase().replace(' ', '-')}`;
    badgeStatus.className = 'status-badge ' + statusClass;
    badgeStatus.innerHTML = currentState.status;
    statusControl.value = currentState.status;
  }

  // Enter Edit Mode
  function enterEditMode() {
    isEditMode = true;
    editTitle.value = currentState.title;
    editDescription.value = currentState.description;
    editPriority.value = currentState.priority;
    editDueDate.value = currentState.dueDate;

    actionsView.style.display = 'none';
    editMode.style.display = 'block';
    editTitle.focus();
  }

  // Exit Edit Mode
  function exitEditMode() {
    isEditMode = false;
    editMode.style.display = 'none';
    actionsView.style.display = 'flex';
    editBtn.focus();
  }

  // Save Changes
  function saveChanges() {
    currentState.title = editTitle.value.trim();
    currentState.description = editDescription.value.trim();
    currentState.priority = editPriority.value;
    currentState.dueDate = editDueDate.value; 

    
    if (currentState.dueDate) {
      // Update our target date variable
      myTargetDate = new Date(currentState.dueDate + "T18:00:00Z");

      // Format the date
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      const formattedDate = myTargetDate.toLocaleDateString('en-US', options);
      
      // Update the <time> element
      const timeElement = document.querySelector('[data-testid="test-todo-due-date"]');
      if (timeElement) {
        timeElement.innerHTML = `Due ${formattedDate}`;
        timeElement.setAttribute('datetime', myTargetDate.toISOString());
      }
    }

    // Update other display elements
    theTitle.innerHTML = currentState.title;
    theDescription.innerHTML = currentState.description;
    updatePriorityVisual();
    updateTheTime(); // Recalculate 

    // Manage expand/collapse
    if (currentState.description.length > 100) {
      descriptionSection.style.display = 'block';
      expandToggle.style.display = 'inline';
    } else {
      expandToggle.style.display = 'none';
      collapsibleSection.style.display = 'none';
      collapsibleSection.classList.remove('expanded');
    }

    exitEditMode();
  }

  // Sync Checkbox and Status
  function syncCheckboxAndStatus() {
    if (myCheckbox.checked) {
      currentState.isCompleted = true;
      currentState.status = "Done";
      theCardBox.classList.add('is-completed');
    } else {
      currentState.isCompleted = false;
      currentState.status = "Pending";
      theCardBox.classList.remove('is-completed');
    }
    updateStatusVisual();
    updateTheTime();
  }

  // Sync Status and Checkbox
  function syncStatusAndCheckbox(newStatus) {
    currentState.status = newStatus;
    statusControl.value = newStatus;
    badgeStatus.innerHTML = newStatus;

    if (newStatus === "Done") {
      myCheckbox.checked = true;
      currentState.isCompleted = true;
      theCardBox.classList.add('is-completed');
    } else {
      myCheckbox.checked = false;
      currentState.isCompleted = false;
      theCardBox.classList.remove('is-completed');
    }

    const statusClass = `status-badge--${newStatus.toLowerCase().replace(' ', '-')}`;
    badgeStatus.className = 'status-badge ' + statusClass;
    updateTheTime();
  }

  // Event Listeners

  // Checkbox change
  if (myCheckbox) {
    myCheckbox.addEventListener('change', syncCheckboxAndStatus);
  }

  // Edit button
  if (editBtn) {
    editBtn.addEventListener('click', enterEditMode);
  }

  // Save button
  if (saveBtn) {
    saveBtn.addEventListener('click', function (e) {
      e.preventDefault();
      if (editForm.checkValidity()) {
        saveChanges();
      } else {
        editForm.reportValidity();
      }
    });
  }

  // Cancel button
  if (cancelBtn) {
    cancelBtn.addEventListener('click', exitEditMode);
  }

  // Delete button
  if (deleteBtn) {
    deleteBtn.addEventListener('click', function () {
      alert("Task deleted");
    });
  }

  // Status control change
  if (statusControl) {
    statusControl.addEventListener('change', function () {
      syncStatusAndCheckbox(this.value);
    });
  }

  // Expand/Collapse toggle
  if (expandToggle) {
    expandToggle.addEventListener('click', function () {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      if (isExpanded) {
        // Collapse
        this.setAttribute('aria-expanded', 'false');
        this.innerHTML = 'Read more';
        collapsibleSection.classList.remove('expanded');
        setTimeout(() => {
          collapsibleSection.style.display = 'none';
        }, 300);
      } else {
        // Expand
        this.setAttribute('aria-expanded', 'true');
        this.innerHTML = 'Read less';
        collapsibleSection.style.display = 'block';
        setTimeout(() => {
          collapsibleSection.classList.add('expanded');
        }, 10);
      }
    });
  }

  // Check description length on load
  if (currentState.description.length > 100) {
    descriptionSection.style.display = 'block';
    expandToggle.style.display = 'inline';
    collapsibleSection.style.display = 'none';
  }

  // Update time on load and every 30-60 seconds
  updateTheTime();
  setInterval(updateTheTime, 45000);

  // Keyboard navigation: Escape to exit edit mode
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isEditMode) {
      exitEditMode();
    }
  });
};