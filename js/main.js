const ref = {
  navList: document.querySelector('.studio-portf-cont'),
  modalElement: document.querySelector('.modal'),
  backdropModal: document.querySelector('.modal-overlay'),
  btnOpenModal: document.getElementById('btnOpenModal'),
  btnClose: document.querySelector('.eclipse'),
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
// #endregion

// #region Open Modal
ref.btnOpenModal.addEventListener('click', handleModalClick);
ref.btnClose.addEventListener('click', handleModalClick);
document.addEventListener('keydown', event => {
  if (event.code === 'Escape') handleModalClick(event);
});

function handleModalClick(event) {
  const btn = event.target;

  if (btn.nodeName !== 'BUTTON') return;

  ref.backdropModal.classList.toggle('is-open');

  if (btn === ref.btnClose || event.code === 'Escape') {
    ref.backdropModal.classList.remove('is-open');
  }
}

// #endregion

// #region

// #endregion
