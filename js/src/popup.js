const togglePopup = () => {
  const popupContent = document.querySelector('.header-modal'),
    overlay = document.querySelector('.overlay');
  
  document.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('.fancyboxModal')) {      
      event.preventDefault();
      popupContent.classList.remove('header-modal');
      overlay.style.display = 'block';
    }
    if (target.closest('.header-modal__close')) {
      popupContent.classList.add('header-modal');
      overlay.style = '';
    }

  });
};

export default togglePopup;