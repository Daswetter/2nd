import MaskedTextField from './masked-text-field';

$(() => {
  $('.js-masked-text-field__input').each((index, node) => {
    new MaskedTextField($(node));
  });
});
