let protocol = window.location.protocol;
let buttons = document.querySelectorAll('a');

buttons.forEach(button => {
  const href = button.getAttribute('href');
  if (href && href.indexOf('http') !== 0) {
    button.href = `${protocol}//${href}`;
  }
  
})