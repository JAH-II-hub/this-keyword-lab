const buttons = document.querySelectorAll('.color-btn');

// Define a single handler function
function changeColor() {
  // In a regular function event handler,
  // 'this' refers to the element that triggered the event.
  this.style.backgroundColor = 'yellow';
}

// Attach the same handler to all buttons
buttons.forEach(function(button) {
  button.addEventListener('click', changeColor);
});
