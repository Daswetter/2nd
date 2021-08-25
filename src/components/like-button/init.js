import LikeButton from './LikeButton';

$(() => {
  $('.js-like-button').each((_, node) => {
    new LikeButton($(node));
  });
});
