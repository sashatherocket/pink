import $ from "jquery";
class Slider {
  constructor() {
    this.bullet1 = $("#bullet-1");
    this.bullet2 = $("#bullet-2");
    this.bullet3 = $("#bullet-3");
    this.slide1 = $("#slide-1");
    this.slide2 = $("#slide-2");
    this.slide3 = $("#slide-3");
    this.current = 1;
    this.events();
  }
  events() {
    this.bullet1.click(this.showSlide1.bind(this));
    this.bullet2.click(this.showSlide2.bind(this));
    this.bullet3.click(this.showSlide3.bind(this));
  }
  removeClasses(item) {
    item.removeClass("testimonials__slider__slides__item--left-in testimonials__slider__slides__item--left-out testimonials__slider__slides__item--right-in testimonials__slider__slides__item--right-out testimonials__slider__slides__item--right-out-l");
  }
  showSlide1() {
    if(this.current == 3) this.slide2.css("opacity", "0");
    this.current = 1;
    this.bullet1.addClass("testimonials__slider__controls__item--active");
    this.bullet2.removeClass("testimonials__slider__controls__item--active");
    this.bullet3.removeClass("testimonials__slider__controls__item--active");
    this.removeClasses(this.slide1);
    this.removeClasses(this.slide2);
    this.removeClasses(this.slide3);
    this.slide1.addClass("testimonials__slider__slides__item--left-in");
    this.slide2.addClass("testimonials__slider__slides__item--right-out");
    setTimeout(function() {
      $("#slide-2").css("opacity", "1");
    }, 700);
    this.slide3.addClass("testimonials__slider__slides__item--right-out");
  }
  showSlide2() {
    this.current = 2;
    this.bullet1.removeClass("testimonials__slider__controls__item--active");
    this.bullet2.addClass("testimonials__slider__controls__item--active");
    this.bullet3.removeClass("testimonials__slider__controls__item--active");
    this.removeClasses(this.slide1);
    this.removeClasses(this.slide2);
    this.removeClasses(this.slide3);
    this.slide1.addClass("testimonials__slider__slides__item--left-out");
    this.slide2.addClass("testimonials__slider__slides__item--right-in");
    this.slide3.addClass("testimonials__slider__slides__item--right-out");
  }
  showSlide3() {
    if(this.current == 1) this.slide2.css("opacity", "0");
    this.current = 3;
    this.bullet1.removeClass("testimonials__slider__controls__item--active");
    this.bullet2.removeClass("testimonials__slider__controls__item--active");
    this.bullet3.addClass("testimonials__slider__controls__item--active");
    this.removeClasses(this.slide1);
    this.removeClasses(this.slide2);
    this.removeClasses(this.slide3);
    this.slide1.addClass("testimonials__slider__slides__item--left-out");
    this.slide2.addClass("testimonials__slider__slides__item--right-out-l");
    setTimeout(function() {
      $("#slide-2").css("opacity", "1");
    }, 700);
    this.slide3.addClass("testimonials__slider__slides__item--right-in");
  }
}
export default Slider;
