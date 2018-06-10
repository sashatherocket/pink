import $ from "jquery";
class TestimonialsSlider {
  constructor() {
    this.bullet1 = $("#bullet-1");
    this.bullet2 = $("#bullet-2");
    this.bullet3 = $("#bullet-3");
    this.slide1 = $("#slide-1");
    this.slide2 = $("#slide-2");
    this.slide3 = $("#slide-3");
    this.currentSlide = 1;
    this.events();
    setTimeout(this.showNext.bind(this), 5000);
  }
  events() {
    this.bullet1.click(this.showSlide1.bind(this));
    this.bullet2.click(this.showSlide2.bind(this));
    this.bullet3.click(this.showSlide3.bind(this));
  }
  removeClasses(item) {
    item.removeClass("testimonials-slider__slides__item--left-in testimonials-slider__slides__item--left-out testimonials-slider__slides__item--right-in testimonials-slider__slides__item--right-out testimonials-slider__slides__item--right-out-l");
  }
  showSlide1() {
    if(this.currentSlide == 3) this.slide2.css("opacity", "0");
    this.currentSlide = 1;
    this.bullet1.addClass("testimonials-slider__controls__item--active");
    this.bullet2.removeClass("testimonials-slider__controls__item--active");
    this.bullet3.removeClass("testimonials-slider__controls__item--active");
    this.removeClasses(this.slide1);
    this.removeClasses(this.slide2);
    this.removeClasses(this.slide3);
    this.slide1.addClass("testimonials-slider__slides__item--left-in");
    this.slide2.addClass("testimonials-slider__slides__item--right-out");
    setTimeout(function() {
      $("#slide-2").css("opacity", "1");
    }, 700);
    this.slide3.addClass("testimonials-slider__slides__item--right-out");
  }
  showSlide2() {
    this.currentSlide = 2;
    this.bullet1.removeClass("testimonials-slider__controls__item--active");
    this.bullet2.addClass("testimonials-slider__controls__item--active");
    this.bullet3.removeClass("testimonials-slider__controls__item--active");
    this.removeClasses(this.slide1);
    this.removeClasses(this.slide2);
    this.removeClasses(this.slide3);
    this.slide1.addClass("testimonials-slider__slides__item--left-out");
    this.slide2.addClass("testimonials-slider__slides__item--right-in");
    this.slide3.addClass("testimonials-slider__slides__item--right-out");
  }
  showSlide3() {
    if(this.currentSlide == 1) this.slide2.css("opacity", "0");
    this.currentSlide = 3;
    this.bullet1.removeClass("testimonials-slider__controls__item--active");
    this.bullet2.removeClass("testimonials-slider__controls__item--active");
    this.bullet3.addClass("testimonials-slider__controls__item--active");
    this.removeClasses(this.slide1);
    this.removeClasses(this.slide2);
    this.removeClasses(this.slide3);
    this.slide1.addClass("testimonials-slider__slides__item--left-out");
    this.slide2.addClass("testimonials-slider__slides__item--right-out-l");
    setTimeout(function() {
      $("#slide-2").css("opacity", "1");
    }, 700);
    this.slide3.addClass("testimonials-slider__slides__item--right-in");
  }
  showNext() {
    if (this.currentSlide == 1) (this.showSlide2.bind(this))();
    else if (this.currentSlide == 2) (this.showSlide3.bind(this))();
    else if (this.currentSlide == 3) (this.showSlide1.bind(this))();
    setTimeout(this.showNext.bind(this), 5000);
  }

}
export default TestimonialsSlider;
