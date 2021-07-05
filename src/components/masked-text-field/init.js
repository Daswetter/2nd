import MaskedTextField from './MaskedTextField';

$(() => {
  $('.js-masked-text-field__input').each((index, node) => {
    new MaskedTextField($(node));
  });
});
