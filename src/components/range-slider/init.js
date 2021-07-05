import RangeSlider from './RangeSlider';

$(() => {
  $('.js-range-slider__input').each((index, node) => {
    new RangeSlider($(node));
  });
});
