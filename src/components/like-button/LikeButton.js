class LikeButton {
  constructor($component) {
    this.$component = $component;
    this.toggleLike();
  }

  toggleLike() {
    const $input = $('input.js-like-button__input', this.$component);
    const $likeNumber = $('.js-like-button__number', this.$component);
    $input.on('change', () => {
      if ($input[0].checked) {
        $likeNumber.text(Number($likeNumber.text()) + 1);
      } else {
        $likeNumber.text(Number($likeNumber.text()) - 1);
      }
    });
  }
}

export default LikeButton;
