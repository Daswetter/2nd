import 'air-datepicker/dist/js/datepicker.js';
import './calendar.scss'
$(function() {
  // datepicker.prototype = {
  // init: function () {
  //   this.$datepicker.on('mouseenter', '.datepicker--cell', this._onMouseEnterCell.unbind(this));
  //   this.$datepicker.on('mouseleave', '.datepicker--cell', this._onMouseLeaveCell.unbind(this));
  //   }}
  let $start = $('.calendar__start'),
      $end   = $('.calendar__end');

  let picker = $('.calendar__start').datepicker({
    range: true,
    multipleDatesSeparator: '-',
    language: "en",
    clearButton: true,
    // todayButton: true,
    // applyButton:true,
    classes: 'abs',
    prevHtml:'<span class="material-icons">arrow_back</span>',
    nextHtml:'<span class="material-icons">arrow_forward</span>',

    // delete comma between year and month
    navTitles: {
      days: 'MM yyyy',
    },
    
    onSelect: function (fd, d, picker) { 
      $(".calendar__start").val(fd.split("-")[0]);
      $(".calendar__end").val(fd.split("-")[1]);
    },
    onHide: function() {
      console.log(this);
    },
    onShow(inst, animationCompleted) {
      if (!animationCompleted) {
        if (!inst.$datepicker.find('.datepicker--buttons .datepicker--button-apply').length) {
          $('<span class="datepicker--button datepicker--button-apply">Применить</span>').on('click', function (e) {
            e.stopPropagation();
            inst.hide();
          }).appendTo(inst.$datepicker.find('.datepicker--buttons'));
        }
      }
    }
  }).data('datepicker');

  $('.calendar__end').on('click', () => {
    picker.show();
  });
  
});



  