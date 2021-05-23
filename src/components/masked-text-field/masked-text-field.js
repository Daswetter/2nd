import 'jquery.maskedinput/src/jquery.maskedinput.js'
class MaskedTextField {
  constructor($component) {
    this.$component = $component
    this.init()
  }

  init() {
    $(this.$component).mask("99.99.9999");
  }
}

$(() => {
  $('.js-masked-text-field__input').each((index, node) => {
    new MaskedTextField($(node));
  });
});