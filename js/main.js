const ref = {
  navList: document.querySelector('.studio-portf-cont'),
  navListMenu: document.querySelector('.studio-portf-cont-menu'),
  modalElement: document.querySelector('.modal'),
  backdropModal: document.querySelector('.modal-overlay'),
  btnOpenModal: document.getElementById('btnOpenModal'),
  btnCloseModal: document.querySelector('.eclipse'),
  btnOpenMenu: document.querySelector('.header-btn-menu'),
  btnCloseMobileMenu: document.querySelector('.modal-btn-close'),
  menuMobile: document.querySelector('.modal-menu'),
};

const {
  navList,
  navListMenu,
  modalElement,
  backdropModal,
  btnOpenModal,
  btnCloseModal,
  btnOpenMenu,
  btnCloseMobileMenu,
  menuMobile,
} = ref;

// #region Navigation
navList.addEventListener('click', event => handleNavClick(event, navList));

navListMenu.addEventListener('click', event =>
  handleNavClick(event, navListMenu)
);

function handleNavClick(event, navigationList) {
  const currentLink = event.target;
  const activeLink = navigationList.querySelector('.active');

  if (currentLink === event.currentTarget) return;

  if (!currentLink.classList.contains('active')) {
    activeLink.classList.remove('active');
    currentLink.classList.add('active');
    if (window.matchMedia('(max-width: 768px)').matches) {
      closeModal(menuMobile, btnCloseMobileMenu);
    }
  }
}

// #endregion

// #region Open/Close modal windows

//todo Функція для відкриття модального вікна
function openModal(modal, closeButton) {
  modal.classList.add('is-open');
  backdropModal.classList.add('is-open');

  closeButton.addEventListener('click', () => closeModal(modal, closeButton));
}

//todo Функція для закриття модального вікна
function closeModal(modal, closeButton) {
  modal.classList.remove('is-open');
  backdropModal.classList.remove('is-open');
  // Видаляємо обробник події для кнопки закриття
  closeButton.removeEventListener('click', () =>
    closeModal(modal, closeButton)
  );
}

// Додаємо обробник події для кнопки відкриття модального вікна
btnOpenModal.addEventListener('click', () =>
  openModal(backdropModal, btnCloseModal)
);

btnOpenMenu.addEventListener('click', () =>
  openModal(menuMobile, btnCloseMobileMenu)
);
// #endregion
