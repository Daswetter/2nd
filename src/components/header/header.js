class Header {
  constructor($component) {
    this.$component = $component
    this.setBurgerMenu()
  }
  setBurgerMenu() {
    const $burger = $('.js-header__burger', this.$component)
    const $nav = $('.js-header__nav', this.$component)
    const $line1 = $('.js-header__line1', this.$component)
    const $line2 = $('.js-header__line2', this.$component)
    const $line3 = $('.js-header__line3', this.$component)
    $burger.on('click', () => {
      $nav.toggleClass('header__nav_active')
      $line1.toggleClass('header__line1_active')
      $line2.toggleClass('header__line2_active')
      $line3.toggleClass('header__line3_active')
    })

    $(document).on('click', (event) => {
      if(!$(event.target).closest(this.$component).length){
        $nav.removeClass('header__nav_active');
        $line1.removeClass('header__line1_active')
        $line2.removeClass('header__line2_active')
        $line3.removeClass('header__line3_active')
      }
    });
  }
}

$(() => {
  $('.js-header').each((index, node) => {
    new Header($(node));
  });
});