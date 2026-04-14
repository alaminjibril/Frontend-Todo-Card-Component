// Wait till page is ready
window.onload = function () {
  // Set the target date
  var myTargetDate = new Date("2026-03-01T18:00:00Z");

  // Get all the elements from the HTML page
  var theTimeText = document.querySelector('[data-testid="test-todo-time-remaining"]');
  var myCheckbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
  var theCardBox = document.querySelector('[data-testid="test-todo-card"]');
  var badgeStatus = document.querySelector('[data-testid="test-todo-status"]');
  var theTitle = document.querySelector('[data-testid="test-todo-title"]');

  var myEditBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
  var myDeleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');

  // Function to format the time remaining
  function formatTimeRemaining(diffTime) {
    // If difference is less than 0, it is overdue
    if (diffTime < 0) {
      var negativeDiff = diffTime * -1;

      // Math stuff to get days, hours, mins
      var daysOver = Math.floor(negativeDiff / 1000 / 60 / 60 / 24);
      var hoursOver = Math.floor((negativeDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
      var minsOver = Math.floor((negativeDiff % (1000 * 60 * 60)) / 1000 / 60);

      if (daysOver > 0) {
        return daysOver === 1 ? "Overdue by 1 day" : "Overdue by " + daysOver + " days";
      }
      else if (hoursOver > 0) {
        return hoursOver === 1 ? "Overdue by 1 hour" : "Overdue by " + hoursOver + " hours";
      }
      else {
        return minsOver === 1 ? "Overdue by 1 minute" : "Overdue by " + minsOver + " minutes";
      }
    }
    // If it is not overdue
    else {
      var t1 = new Date();
      t1.setHours(0, 0, 0, 0);
      var t2 = new Date(myTargetDate.getTime());
      t2.setHours(0, 0, 0, 0);

      // Math to get the diff in days
      var theDayDifference = (t2.getTime() - t1.getTime()) / (1000 * 60 * 60 * 24);
      var theDayDifferenceRounded = Math.round(theDayDifference);

      var minutesLeft = Math.floor(diffTime / 1000 / 60);

      if (minutesLeft < 1) {
        return "Due now!";
      } else if (minutesLeft < 60) {
        return minutesLeft === 1 ? "Due in 1 minute" : "Due in " + minutesLeft + " minutes";
      } else if (theDayDifferenceRounded === 0) {
        return "Due today";
      } else if (theDayDifferenceRounded === 1) {
        return "Due tomorrow";
      } else {
        return "Due in " + theDayDifferenceRounded + " days";
      }
    }
  }

  // Function to update the time
  function updateTheTime() {
    if (theTimeText != null) {
      var dateNow = new Date(); // Get current time
      var diffTime = myTargetDate.getTime() - dateNow.getTime(); // Minus to get difference

      theTimeText.innerHTML = formatTimeRemaining(diffTime);
    }
  }

  // Checking if checkbox exists
  if (myCheckbox) {
    
    myCheckbox.addEventListener('change', function (event) {
      // Check if it is checked
      if (myCheckbox.checked === true) {
        // Add class to card
        if (!theCardBox.classList.contains('is-completed')) {
          theCardBox.classList.add('is-completed');
        }
        // Update badge to Done
        badgeStatus.innerHTML = "Done";
        // Update badge class
        badgeStatus.classList.remove('status-badge--in-progress', 'status-badge--pending');
        badgeStatus.classList.add('status-badge--done');
      } else {
        // Remove class from card
        theCardBox.classList.remove('is-completed');
        // Update badge to In Progress
        badgeStatus.innerHTML = "In Progress";
        // Update badge class
        badgeStatus.classList.remove('status-badge--done');
        badgeStatus.classList.add('status-badge--in-progress');
      }
    });
  }

  // Edit button handler
  if (myEditBtn) {
    myEditBtn.addEventListener('click', function () {
      console.log("Edit clicked");
    });
  }

  // Delete button handler
  if (myDeleteBtn) {
    myDeleteBtn.addEventListener('click', function () {
      alert("Task deleted");
    });
  }

  // Start updating time initially
  updateTheTime();

  setInterval(updateTheTime, 60000);
};