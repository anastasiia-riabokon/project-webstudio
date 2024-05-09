const ref = {
  navList: document.querySelector('.studio-portf-cont'),
  modalElement: document.querySelector('.modal'),
  backdropModal: document.querySelector('.modal-overlay'),
  btnOpenModal: document.getElementById('btnOpenModal'),
  btnCloseModal: document.querySelector('.eclipse'),
  btnOpenMenu: document.querySelector('.header-btn-menu'),
  btnCloseMobileMenu: document.querySelector('.modal-btn-close'),
  menuMobile: document.querySelector('.modal-menu'),
};

// #region Navigation
ref.navList.addEventListener('click', handleNavClick);

function handleNavClick(event) {
  const currentLink = event.target;
  const activeLink = ref.navList.querySelector('.active');

  if (currentLink === event.currentTarget) return;

  if (
    !currentLink.classList.contains('active') &&
    activeLink.classList.contains('active')
  ) {
    activeLink.classList.remove('active');
    currentLink.classList.add('active');
  }
}

ref.navList.addEventListener('touchstart', handleNavTouch);

// #endregion

// #region Open/Close Modal
ref.btnOpenModal.addEventListener('click', handleModalClick);
ref.btnOpenModal.addEventListener('touchstart', handleModalClick);
ref.btnCloseModal.addEventListener('click', handleModalClick);
ref.btnCloseModal.addEventListener('touchstart', handleModalClick);
document.addEventListener('keydown', event => {
  if (event.code === 'Escape') handleModalClick(event);
});

function handleModalClick(event) {
  const btn = event.target;

  ref.backdropModal.classList.toggle('is-open');

  if (btn === ref.btnClose || event.code === 'Escape') {
    ref.backdropModal.classList.remove('is-open');
  }
}

// #endregion

// #region Open/Close mobile menu
ref.btnOpenMenu.addEventListener('touchstart', handleMenuClick);
ref.btnCloseMobileMenu.addEventListener('touchstart', handleMenuClick);

function handleMenuClick(event) {
  const btn = event.target;

  ref.menuMobile.classList.toggle('is-open');

  if (btn === ref.btnClose) ref.menuMobile.classList.remove('is-open');
}
// #endregion
