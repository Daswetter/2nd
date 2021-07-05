class LandingPage {
  constructor($component) {
    this.$component = $component;
    this.setPageSize();
  }

  setPageSize() {
    const $header = $('.js-landing-page__header').find('.js-header');
    const $form = $('.js-landing-page__search-room');
    const mainHeight = window.innerHeight - $header.height();
    const minMainHeight = $form.height() + 150;
    if (mainHeight < minMainHeight) {
      this.$component.css('height', minMainHeight);
    } else {
      this.$component.css('height', mainHeight);
    }
  }
}

export default LandingPage;
