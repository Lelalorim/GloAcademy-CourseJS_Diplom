class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    infinity = false,
    position = 0,
    slidesToShow = 3,
    responsive = [],
  }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / this.slidesToShow),
    };
    this.responsive = responsive;
  }

  init() {
    this.addNewClass();
    this.addStyle();

    if(this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }
    if(this.responsive) {

      this.responseInit();
    }
  }

  addNewClass() {
    this.main.classList.add('js-slider');
    this.wrap.classList.add('js-slider__wrap');
    for ( const item of this.slides) {
      item.classList.add('js-slider__item');
    }
  }

  addStyle() {
    let style = document.getElementById('sliderCarousel-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'sliderCarousel-style';
    }
    style.textContent = `
      .js-slider {
        display: flex;
        overflow: hidden !important;
      }
      .js-slider__wrap {
        display: flex !important;
        max-width: 100%;
        transition: transform 0.5s !important;
        will-change: transform !important;
      }
      .js-slider__item {
        display: flex;
        flex-direction: column;
        max-width: ${this.options.widthSlide}% !important;      
        flex: 0 0 ${this.options.widthSlide}% !important;

      }
    `;
    document.head.append(style);
  }

  controlSlider(){
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider(){
    if (this.options.infinity) {
      const first = this.slides[0];
      const last = this.slides[this.slides.length-1];
      this.wrap.insertBefore(last, first);
    }else {
      if(this.options.position > 0){

      --this.options.position;
      
      this.wrap.style.transform = `
        translateX(-${this.options.position * this.options.widthSlide}%)
      `;
      }
    }
    
  }
  
  nextSlider(){
    if(this.options.infinity){
      const first = this.slides[0];
      this.wrap.append(first);
    } else {      
      if(this.options.position < this.slides.length - this.slidesToShow) {

        ++this.options.position;
      }      

      this.wrap.style.transform = `
        translateX(-${this.options.position * this.options.widthSlide}%)
      `;
    }
  
  }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allResponse = this.responsive.map(item => item.breakpoint);
    const maxResponse = Math.max(...allResponse);

    const checkResponse = ()=> {
      const widthWindow = document.documentElement.clientWidth;
      if ( widthWindow < maxResponse) {
        for ( let i = 0; i < allResponse.length; i++) {
          if (widthWindow < allResponse[i]){
            this.slidesToShow = this.responsive[i].slideToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      }
    };

    checkResponse();

    window.addEventListener('resize', checkResponse);
  }

}

export default SliderCarousel;