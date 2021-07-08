class ExpandableCheckbox {
  constructor($component) {
    this.$component = $component;
    this.toggle();
  }

  toggle() {
    const $label = $('.js-expandable-checkbox__label', this.$component);
    const $ul = $('.js-expandable-checkbox__list', this.$component);
    const $icon = $('.js-expandable-checkbox__icon', this.$component);
    if ($label.data('initial') === 'open') {
      $ul.addClass('expandable-checkbox__list_active');
      $icon.addClass('expandable-checkbox__icon_active');
    }
    $label.on('click', () => {
      $ul.toggleClass('expandable-checkbox__list_active');
      $icon.toggleClass('expandable-checkbox__icon_active');
    });
  }
}

export default ExpandableCheckbox;
