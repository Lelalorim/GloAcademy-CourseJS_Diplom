const togglePopup = (btnSelector, modalSelector) => {
  const popupContent = document.querySelector(modalSelector),
    overlay = document.querySelector('.overlay');
  
  document.addEventListener('click', event => {
    const target = event.target;
    if (target.closest(btnSelector)) {      
      event.preventDefault();
      popupContent.classList.remove(modalSelector.substring(1));
      overlay.classList.toggle('overlay-active');
    }
    if (target.closest(`${modalSelector}__close`)) {
      popupContent.classList.add(modalSelector.substring(1));
      overlay.classList.toggle('overlay-active');
    }

  });
};

export default togglePopup;