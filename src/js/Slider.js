import $ from "jquery";
class Slider {
  constructor() {
    this.bullet1 = $("#bullet-1");
    this.bullet2 = $("#bullet-2");
    this.bullet3 = $("#bullet-3");
    this.slide1 = $("#slide-1");
    this.slide2 = $("#slide-2");
    this.slide3 = $("#slide-3");
    this.events();
  }
  events() {
    this.bullet1.click(this.showSlide1.bind(this));
    this.bullet2.click(this.showSlide2.bind(this));
    this.bullet3.click(this.showSlide3.bind(this));
  }
  showSlide1() {
    this.bullet1.addClass("testimonials__slider__controls__item__active");
    this.bullet2.removeClass("testimonials__slider__controls__item__active");
    this.bullet3.removeClass("testimonials__slider__controls__item__active");
    this.slide1.addClass("testimonials__slider__slides__item__active");
    this.slide2.removeClass("testimonials__slider__slides__item__active");
    this.slide3.removeClass("testimonials__slider__slides__item__active");
  }
  showSlide2() {
    this.bullet1.removeClass("testimonials__slider__controls__item__active");
    this.bullet2.addClass("testimonials__slider__controls__item__active");
    this.bullet3.removeClass("testimonials__slider__controls__item__active");
    this.slide1.removeClass("testimonials__slider__slides__item__active");
    this.slide2.addClass("testimonials__slider__slides__item__active");
    this.slide3.removeClass("testimonials__slider__slides__item__active");
  }
  showSlide3() {
    this.bullet1.removeClass("testimonials__slider__controls__item__active");
    this.bullet2.removeClass("testimonials__slider__controls__item__active");
    this.bullet3.addClass("testimonials__slider__controls__item__active");
    this.slide1.removeClass("testimonials__slider__slides__item__active");
    this.slide2.removeClass("testimonials__slider__slides__item__active");
    this.slide3.addClass("testimonials__slider__slides__item__active");
  }
}
export default Slider;
