import 'ion-rangeslider';

class RangeSlider {
  constructor($component) {
    this.$component = $component;
    this.init();
  }

  init() {
    $(this.$component).ionRangeSlider({
      type: 'double',
      min: 0,
      max: 15000,
      from: 5000,
      to: 10000,
      hide_min_max: true,
      prettify_separator: ' ',
      onChange: this.showCurrent,
      onStart: this.showCurrent,
    });
  }

  showCurrent(data) {
    const $current = document.querySelector('.js-range-slider__current', this.$component);
    $current.innerText = `${data.from_pretty}₽ - ${data.to_pretty} ₽`;
  }
}

$(() => {
  $('.js-range-slider__input').each((index, node) => {
    new RangeSlider($(node));
  });
});
