const smallContainers = document.querySelectorAll('.small');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('comeinAnim'); // Add animation class when in viewport
    } else {
      entry.target.classList.remove('comeinAnim'); // Remove animation class when out of viewport
    }
  });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

smallContainers.forEach(container => observer.observe(container));


const paralaxSection = document.getElementById('section1')

window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  paralaxSection.style.backgroundPositionY = offset / 2 + "px"
})