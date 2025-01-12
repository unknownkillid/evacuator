const smallContainers = document.querySelectorAll('.small');
const carContainer = document.querySelector('.car-container')
const chooseContainer = document.querySelector('.choose-parts-container')
const cargoPic = document.querySelector('.cargoPic')
const questPicture = document.querySelector('.quest-picture')

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('comeinAnim');
      entry.target.classList.add('carContainerIn')
      entry.target.classList.add('cargoIn')
      entry.target.classList.add('questComeIn')
    } else {
      entry.target.classList.remove('comeinAnim'); 
      entry.target.classList.remove('carContainerIn')
      entry.target.classList.remove('cargoIn')
      entry.target.classList.remove('questComeIn')
    }
  });
}, { threshold: 0.1 });

smallContainers.forEach(container => observer.observe(container));
observer.observe(carContainer)
observer.observe(cargoPic)
observer.observe(questPicture)


const paralaxSection = document.getElementById('section1')

window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  paralaxSection.style.backgroundPositionY = offset / 2 + "px"
})

function fullInfoMechanic(diag, eng, tir, batt, shif, oil) {
  const fullInfo = document.getElementById("fullInfo");
  let info = '';

  const options = {
    diag: 'კომპიუტერული დიაგნოსტიკა თქვენი მანქანისთვის',
    eng: 'ძრავის შეკეთება, დიაგნოსტიკა',
    tir: 'საბურავების შეკეთება, გამოცვლა',
    batt: 'აკუმლატორის შეკეთება, დატენვა',
    shif: 'გადაცემათა კოლოფის შეკეთება',
    oil: 'ზეთის შეცვლა, შემოწმება'
  };

  if (diag) info += options.diag + '\n';
  if (eng) info += options.eng + '\n';
  if (tir) info += options.tir + '\n';
  if (batt) info += options.batt + '\n';
  if (shif) info += options.shif + '\n';
  if (oil) info += options.oil + '\n';

  fullInfo.textContent = info;

  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('orange'));

  if (diag) document.getElementById('diagnostic').classList.add('orange');
  if (eng) document.getElementById('engine').classList.add('orange');
  if (tir) document.getElementById('tires').classList.add('orange');
  if (batt) document.getElementById('battery').classList.add('orange');
  if (shif) document.getElementById('shift').classList.add('orange');
  if (oil) document.getElementById('oil').classList.add('orange');
}

document.getElementById('diagnostic').classList.add('orange');


const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdown.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
  if (!dropdown.contains(event.target)) {
    dropdownMenu.style.display = 'none';
  }
});

const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    // Close all other answers
    document.querySelectorAll('.faq-answer').forEach(answer => {
      if (answer !== question.nextElementSibling) {
        answer.classList.remove('show');
      }
    });

    // Toggle the clicked question's answer
    const answer = question.nextElementSibling;
    answer.classList.toggle('show');
  });
});