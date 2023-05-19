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

// function toggleOpenModal(button, window) {
//   button.addEventListener('click', (event) => {
//     event.preventDefault();
//     window.classList.toggle('open');
//     body.classList.toggle('no-scroll');
//   })
// }

function openModal(button, window) {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    window.classList.add('open');
    body.classList.add('no-scroll');
  })
}

function closeModal(button, window) {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    window.classList.remove('open');
    body.classList.remove('no-scroll');
  })
}

const body = document.querySelector('body');

const accordionItems = document.querySelectorAll('.faq__accordion-item');

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', toggleAccordion);
}

const headerNavButton = document.querySelector('.header__button');
const headerNav = document.querySelector('.header__mobile-nav');
const burgerLinks = document.querySelectorAll('.header__mobile-nav-list a');

console.log(burgerLinks);

headerNavButton.addEventListener('click', () => {
  headerNavButton.classList.toggle('active');
  headerNav.classList.toggle('active');
  body.classList.toggle('no-scroll')
})

for (const burgerLink of burgerLinks) {
  burgerLink.addEventListener('click', () => {
    headerNavButton.classList.remove('active');
    headerNav.classList.remove('active');
    body.classList.toggle('no-scroll');
  })
}

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

const openModalButtons = document.querySelectorAll('.open-modal-button');
const openModalsButtonWithCalculations = document.querySelector('.open-modal-button--with-calculations');
const modalWindow = document.querySelector('.modal__window');
const modalWindowWithCalculations = document.querySelector('.modal__window--with-calculations');
const closeModalButtons = document.querySelectorAll('.close-modal-window');
const closeModalButtonWithCalculations = document.querySelector('.close-modal-window--with-calculations');

openModal(openModalsButtonWithCalculations, modalWindowWithCalculations);
closeModal(closeModalButtonWithCalculations, modalWindowWithCalculations);

for (const openModalButton of openModalButtons) {
  openModal(openModalButton, modalWindow)
}

for (const closeModalButton of closeModalButtons) {
  closeModal(closeModalButton, modalWindow);
}

const submenus = document.querySelectorAll('.menu-item-has-children')

for (const submenu of submenus) {
  submenu.addEventListener('mouseenter', function() {
    const submenuItem = this.querySelector('.submenu');
    submenuItem.style.opacity = '0';
    submenuItem.style.pointerEvents = 'all';
    setTimeout(function() {
      submenuItem.style.opacity = '1';
    }, 200);
  });

  submenu.addEventListener('mouseleave', function() {
    const submenuItem = this.querySelector('.submenu');
    submenuItem.style.opacity = '1';
    setTimeout(function() {
      submenuItem.style.opacity = '0';
      submenuItem.style.pointerEvents = 'none';
    }, 200);
  });
}

