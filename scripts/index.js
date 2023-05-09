function toggleAccordion() {
  const accordionContent = this.querySelector('.faq__accordion-content');
  const isOpen = accordionContent.classList.contains('active');
  const accordionButton = this.querySelector('.faq__accordion-button')

  if (isOpen) {
    accordionContent.style.maxHeight = null;
  } else {
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
  }

  accordionContent.classList.toggle('active');
  accordionButton.classList.toggle('active');
}

function toggleButtonMore(button, content, maxHeight, expandText, collapseText) {
  const isVisible = content.classList.contains('visible');
  content.classList.toggle('visible');

  if (isVisible) {
    content.style.maxHeight = maxHeight + 'px';
    button.innerHTML = expandText;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
    button.innerHTML = collapseText;
  }
}

const accordionItems = document.querySelectorAll('.faq__accordion-item');

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', toggleAccordion);
}

const headerNavButton = document.querySelector('.header__button');
const headerNav = document.querySelector('.header__mobile-nav');
const body = document.querySelector('body')

headerNavButton.addEventListener('click', () => {
  headerNavButton.classList.toggle('active');
  headerNav.classList.toggle('active');
  body.classList.toggle('no-scroll');
})

const buttonMoreAbout = document.querySelector('.button__more');
const contentAbout = buttonMoreAbout.previousElementSibling;
buttonMoreAbout.addEventListener('click', () => {
  toggleButtonMore(buttonMoreAbout, contentAbout, 240, 'Більше +', 'Менше -');
});

const buttonMoreProjects = document.querySelector('.button__more-projects');
const contentProjects = buttonMoreProjects.previousElementSibling;
buttonMoreProjects.addEventListener('click', () => {
  toggleButtonMore(buttonMoreProjects, contentProjects, 1000, 'Більше проєктів +', 'Менше проєктів -');
});
