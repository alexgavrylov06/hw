class Slider {
  #defaultOptions = {
    loop: true,
    autoplay: false,
    buttons: false,
    dots: false,
  };

  #sliderWrapper;
  #slides;
  #activeIndex = 0;
  #timer;
  #defaultTimer = 3000;

  constructor(selector, options = {}) {
    const wrapper = document.querySelector(selector);
    if (wrapper) {
      wrapper.classList.add('custom-slider');
      this.#sliderWrapper = wrapper;
    } else {
      throw new Error(`Element by selector ${selector} not found!`);
    }
    this.autoplay = options.autoplay ?? this.#defaultOptions.autoplay;
    this.buttons = options.buttons ?? this.#defaultOptions.buttons;
    this.dots = options.dots ?? this.#defaultOptions.dots;
    this.loop = options.loop ?? this.#defaultOptions.loop;

    this.init();
  }

  init() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('slides');
    Array.from(this.#sliderWrapper.children).forEach((slide) =>
      wrapper.appendChild(slide)
    );
    this.#slides = wrapper.children;
    this.#sliderWrapper.appendChild(wrapper);

    if (this.buttons) {
      this.renderButtons();
    }

    if (this.dots) {
      this.renderDots();
    }

    this.restartSlider();
  }

  restartSlider() {
    this.updateSlider();
    clearInterval(this.#timer);
    if (this.autoplay) {
      this.runAutoplay();
    }
  }

  prevSlide() {
    if (this.#activeIndex > 0) {
      this.#activeIndex--;
    } else {
      this.loop && (this.#activeIndex = this.#slides.length - 1);
    }
    this.restartSlider();
  }

  nextSlide() {
    if (this.#activeIndex < this.#slides.length - 1) {
      this.#activeIndex++;
    } else {
      this.loop && (this.#activeIndex = 0);
    }
    this.restartSlider();
  }

  renderDots() {
    const wrapper = document.createElement('ul');
    wrapper.classList.add('nav-group');

    Array.from(this.#slides).forEach((_, index) => {
      const elem = document.createElement('li');
      elem.classList.add('nav-dot');
      elem.addEventListener('click', () => {
        this.#activeIndex = index;
        this.restartSlider();
      });
      wrapper.appendChild(elem);
    });

    this.#sliderWrapper.appendChild(wrapper);
  }

  renderButtons() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('buttons-group');

    const prevBtn = document.createElement('button');
    prevBtn.classList.add('prevButton');
    prevBtn.innerText = 'Prev';
    prevBtn.addEventListener('click', () => this.prevSlide());

    const nextBtn = document.createElement('button');
    nextBtn.classList.add('nextButton');
    nextBtn.innerText = 'Next';
    nextBtn.addEventListener('click', () => this.nextSlide());

    wrapper.appendChild(prevBtn);
    wrapper.appendChild(nextBtn);

    this.#sliderWrapper.appendChild(wrapper);
  }

  runAutoplay() {
    this.#timer = setInterval(() => {
      if (this.#activeIndex < this.#slides.length - 1) {
        this.#activeIndex++;
      } else {
        this.loop ? (this.#activeIndex = 0) : clearInterval(this.#timer);
      }
      this.updateSlider();
    }, this.#defaultTimer);
  }

  updateSlider() {
    Array.from(this.#slides).forEach((slide, index) => {
      if (index === this.#activeIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    if (this.dots) {
      Array.from(document.querySelectorAll('.nav-dot')).forEach(
        (dot, index) => {
          if (index === this.#activeIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        }
      );
    }
  }
}
