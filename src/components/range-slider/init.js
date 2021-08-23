import RangeSlider from './RangeSlider';

$(() => {
  $('.js-range-slider__input').each((_, node) => {
    new RangeSlider($(node));
  });
});
