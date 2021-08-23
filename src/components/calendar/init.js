import Calendar from './Calendar';

$(() => {
  $('.js-calendar__start').each((_, node) => {
    new Calendar($(node), 'separate');
  });
  $('.js-calendar_type_constant').each((_, node) => {
    new Calendar($(node), 'constant');
  });
  $('.js-calendar__filter-input').each((_, node) => {
    new Calendar($(node), 'filter');
  });
});
