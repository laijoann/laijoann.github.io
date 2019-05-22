document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.contact__emailLink').onmouseover = function() {
    this.classList.add('text--highlight')
  }
  document.querySelector('.contact__emailLink').onmouseout = function() {
    this.classList.remove('text--highlight')
  }
})
