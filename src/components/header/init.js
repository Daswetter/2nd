import Header from './Header';

$(() => {
  $('.js-header').each((_, node) => {
    new Header($(node));
  });
});
