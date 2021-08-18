import SliderCarousel from "./src/slider";
import togglePopup from "./src/popup";
import calc from './src/calculator';
import countTimer from './src/timer';
import smoothScroll from './src/smoothScroll';
import sertificateModal from "./src/sertificateModal";
import sendForm from "./src/sendForm";
import validateInputs from "./src/validate";

const anchorSmoothScroll = document.querySelector('.smooth-scroll');
anchorSmoothScroll.classList.add('js-elem-hide');

const carouselBenefits = new SliderCarousel({
  main: '.benefits-inner',
  wrap: '.benefits-wrap',
  next: '.benefits__arrow--right',
  prev: '.benefits__arrow--left',
  infinity: true,
  position: 0,
  slidesToShow: 3,
  responsive: [{
        breakpoint: 577,
        slideToShow: 3,
      },
      {
        breakpoint: 576,
        slideToShow: 1,
      },
    ],
})

carouselBenefits.init();

sertificateModal();
validateInputs();

togglePopup('.btn-jsHeaderModal', '.header-modal');
togglePopup('.btn-jsServicesModal', '.services-modal');
togglePopup('.sertificate-document', '.sertificate-modal');

countTimer('20 august 2021 21:00');

try{

  calc(1000);

} catch(err) {
  console.warn('На этой странице нет калькулятора');
  console.error(err);
}

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
  
  const target = event.target;
  console.log('target: ', target);

  if(target.matches('.smooth-scroll__img')) {
    smoothScroll();
  }

  if(target.closest('.feedback')) {
    sendForm();
    console.log('отправка формы');
  }

});