const servicesSlider = () => {
  console.log('Наши услуги');

  const slides = document.querySelectorAll('.service-block'),
    prevBtn = document.querySelector('.services__arrow--left'),
    nextBtn = document.querySelector('.services__arrow--right'),
    strClass = 'slide-hide';
  console.log('slides: ', slides);
  
  let curentSlide = 0;
  let style = document.getElementById('servicesSlider');

  if (!style) {
    style = document.createElement('style');
    style.id = 'servicesSlider';
  }
  style.textContent = `
    .slide-hide {
      display: none;
    }
  `;
  document.head.append(style);

  slides.forEach(slide => {
    slide.classList.add(strClass);
  })

  slides[curentSlide].classList.remove(strClass);
  slides[curentSlide + 1].classList.remove(strClass);

  document.addEventListener('click', event => {
    const target = event.target;
    console.log('target: ', target);
    
    if (target.closest('.services__arrow--left')) {
      curentSlide--;
      console.log('curentSlide: ', curentSlide);
      if (curentSlide < 0) {
        curentSlide = slides.length - 1;
        slides[curentSlide].classList.add(strClass);
        slides[curentSlide - 1].classList.add(strClass);
      }
    }
    if (target.closest('.services__arrow--right')) {
      curentSlide++;
      slides[curentSlide - 1].classList.add(strClass);
      if(curentSlide > slides.length - 1) {
        curentSlide = 0;
      }
      slides[curentSlide].classList.remove(strClass);
      slides[curentSlide + 1].classList.remove(strClass);
      console.log('curentSlide: ', curentSlide);
    }
  })
};

export default servicesSlider;