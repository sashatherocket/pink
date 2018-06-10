import $ from "jquery";
class PriceSlider {
  constructor() {
    this.bullet1 = $("#price-slider__bullet-1");
    this.bullet2 = $("#price-slider__bullet-2");
    this.bullet3 = $("#price-slider__bullet-3");
    this.sliderContent = $(".price-slider__content");
    this.currentSlide = 1;
    this.events();
  }
  events() {
    this.bullet1.click(this.showSlide1.bind(this));
    this.bullet2.click(this.showSlide2.bind(this));
    this.bullet3.click(this.showSlide3.bind(this));
  }
  showSlide1() {
    this.bullet1.addClass("price-slider__controls__item--active");
    this.bullet2.removeClass("price-slider__controls__item--active");
    this.bullet3.removeClass("price-slider__controls__item--active");
    this.sliderContent.css("left", "22px");
  }
  showSlide2() {
    this.bullet1.removeClass("price-slider__controls__item--active");
    this.bullet2.addClass("price-slider__controls__item--active");
    this.bullet3.removeClass("price-slider__controls__item--active");
    this.sliderContent.css("left", "-252px");
  }
  showSlide3() {
    this.bullet1.removeClass("price-slider__controls__item--active");
    this.bullet2.removeClass("price-slider__controls__item--active");
    this.bullet3.addClass("price-slider__controls__item--active");
    this.sliderContent.css("left", "-527px");
  }
}
export default PriceSlider;
