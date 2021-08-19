import SliderCarousel from "./src/slider";
import togglePopup from "./src/popup";
import calc from './src/calculator';
import countTimer from './src/timer';
import smoothScroll from './src/smoothScroll';
import sertificateModal from "./src/sertificateModal";
import sendForm from "./src/sendForm";
import validateInputs from "./src/validate";

const carouselBenefits = new SliderCarousel({
    main: '.benefits-inner',
    wrap: '.benefits-wrap',
    next: '.benefits__arrow--right',
    prev: '.benefits__arrow--left',
    infinity: true,
    position: 0,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 576,
        slideToShow: 1,
      },
    ],
  });

const carouselServices = new SliderCarousel({
    main: '.services-inner',
    wrap: '.services-wrap',
    next: '.services__arrow--right',
    prev: '.services__arrow--left',
    infinity: false,
    position: 0,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 576,
        slideToShow: 1,
      },
    ],
  });

  carouselBenefits.init();
  carouselServices.init();

smoothScroll();
sertificateModal();
validateInputs();
sendForm();

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

document.addEventListener('click', event=> {  
  
  const target = event.target;

  if(target.matches('.smooth-scroll__img')) {
    smoothScroll();
  }

});