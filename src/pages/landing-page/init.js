import LandingPage from './LandingPage';

$(() => {
  $('.js-landing-page').each((index, node) => {
    new LandingPage($(node));
  });
});
