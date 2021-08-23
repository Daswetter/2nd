import LandingPage from './LandingPage';

$(() => {
  $('.js-landing-page').each((_, node) => {
    new LandingPage($(node));
  });
});
