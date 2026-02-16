const box = document.querySelector('.box');

box.addEventListener('click', (event) => {

  /*
  BUG EXPLANATION:
  Arrow functions do not have their own 'this'.
  Instead, they inherit 'this' from their surrounding lexical scope.
  In this case, 'this' is NOT the clicked element,
  so this.classList.add('active') throws an error.
  */

  event.currentTarget.classList.add('active');

  /*
  event.currentTarget refers to the element
  that the event listener is attached to.
  It behaves exactly like 'this' would inside
  a regular function event handler.
  */
});
