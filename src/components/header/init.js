import Header from './header';

$(() => {
  $('.js-header').each((index, node) => {
    new Header($(node));
  });
});
