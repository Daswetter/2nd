import Header from './Header';

$(() => {
  $('.js-header').each((index, node) => {
    new Header($(node));
  });
});
