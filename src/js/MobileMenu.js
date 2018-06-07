import $ from "jquery";
class MobileMenu {
  constructor() {
    this.menu = $(".primary-nav");
    this.menuIcon = $(".site-header__title__menu-icon");
    this.headerTitle = $(".site-header__title");
    this.events();
  }
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }
  toggleTheMenu() {
    this.menu.toggleClass("primary-nav--opened");
    this.headerTitle.toggleClass("site-header__title--opened");
    this.menuIcon.toggleClass("site-header__title__menu-icon--close-x")
  }
}
export default MobileMenu;
