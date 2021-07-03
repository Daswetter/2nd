import LandingPage from './landing-page';

$(() => {
  $('.js-landing-page').each((index, node) => {
    new LandingPage($(node));
  });
});
