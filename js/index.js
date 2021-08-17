import SliderCarousel from "./src/slider";
import togglePopup from "./src/popup";
import calc from './src/calculator';

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
togglePopup();

try{

  calc(1000);

} catch(err) {
  console.warn('На этой странице нет калькулятора');
  console.error(err);
}
