import Calendar from './Calendar';

$(() => {
  $('.js-calendar__start').each((index, node) => {
    new Calendar($(node), 'separate');
  });
  $('.js-calendar_type_constant').each((index, node) => {
    new Calendar($(node), 'constant');
  });
  $('.js-calendar__filter-input').each((index, node) => {
    new Calendar($(node), 'filter');
  });
});
