import MaskedTextField from './MaskedTextField';

$(() => {
  $('.js-masked-text-field__input').each((_, node) => {
    new MaskedTextField($(node));
  });
});
