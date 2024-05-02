document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.hero-section');

  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    // Adjust the scroll threshold as needed
    if (scrollPosition > 100) {
      header.style.backgroundColor = '#333'; 
      header.style.color = 'white'; // Change background color on scroll
    } else {
      header.style.backgroundColor = 'transparent'; 
      header.style.color = 'black';// Reset to initial background color
    }
  });
});