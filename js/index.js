

import smoothScroll from './src/smoothScroll';

const anchorSmoothScroll = document.querySelector('.smooth-scroll');
anchorSmoothScroll.classList.add('js-elem-hide');

document.addEventListener('scroll', ()=> {
  const trackBlock = document.getElementById('benefits'),
    requiredScrollValue = trackBlock.offsetTop;

  if (window.pageYOffset > requiredScrollValue) {
    anchorSmoothScroll.classList.remove('js-elem-hide');
  } else {
    anchorSmoothScroll.classList.add('js-elem-hide');
  }
});

document.addEventListener('click', event=> {
  
  event.preventDefault();
  const target = event.target;

  if(target.matches('.smooth-scroll__img')) {
    const id = 'header';
    smoothScroll(id);
  }


});

