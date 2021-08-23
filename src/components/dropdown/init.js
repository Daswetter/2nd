import Dropdown from './Dropdown';

$(() => {
  $('.js-dropdown_content_furniture').each((_, node) => {
    new Dropdown($(node), true);
  });
});
$(() => {
  $('.js-dropdown_content_guests').each((_, node) => {
    new Dropdown($(node));
  });
});
