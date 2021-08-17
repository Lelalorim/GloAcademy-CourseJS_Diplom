

import smoothScroll from './src/smoothScroll';

document.addEventListener('click', event=> {
  
  event.preventDefault();
  const target = event.target;

  if(target.matches('.smooth-scroll__img')) {
    const id = 'header';
    smoothScroll(id);
  }


});

