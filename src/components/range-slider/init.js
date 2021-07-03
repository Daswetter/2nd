import RangeSlider from './range-slider';

$(() => {
  $('.js-range-slider__input').each((index, node) => {
    new RangeSlider($(node));
  });
});
