import Dropdown from './Dropdown';

$(() => {
  $('.js-dropdown_content_furniture').each((index, node) => {
    new Dropdown($(node), true);
  });
});
$(() => {
  $('.js-dropdown_content_guests').each((index, node) => {
    new Dropdown($(node));
  });
});
