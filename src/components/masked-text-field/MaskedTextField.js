import 'jquery.maskedinput/src/jquery.maskedinput';

class MaskedTextField {
  constructor($component) {
    this.$component = $component;
    this.init();
  }

  init() {
    $(this.$component).mask('99.99.9999');
  }
}

export default MaskedTextField;
