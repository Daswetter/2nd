import 'air-datepicker/dist/js/datepicker.min.js';

$(function() {

  let $start = $('.start'),
      $end   = $('.end');

  let picker = $('.start').datepicker({
    range: true,
    multipleDatesSeparator: '-',
    language: "en",
    clearButton: true,
    todayButton: true,
    classes: 'abs',
    prevHtml:'<span class="material-icons">arrow_back</span>',
    nextHtml:'<span class="material-icons">arrow_forward</span>',

    onSelect: function (fd, d, picker) { 
      $(".start").val(fd.split("-")[0]);
      $(".end").val(fd.split("-")[1]);
    },
    onHide: function() {
      console.log(this);
    }
  }).data('datepicker');

  $('.end').on('click', () => {
    picker.show();
  });
});