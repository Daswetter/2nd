import 'air-datepicker/dist/js/datepicker.js';
import './../calendar.scss'
import './../cell.scss'
import './../datepicker.scss'
import './../navigation.scss'

$(function() {
  $('.js-calendar_constant').datepicker({
    range: true,
    multipleDatesSeparator: ' - ',
    clearButton: true,
    prevHtml:'<i class="material-icons">arrow_back</i>',
    nextHtml:'<i class="material-icons">arrow_forward</i>',

    navTitles: {
      days: 'MM yyyy',
    },
    
    dateFormat: 'd M',

    onShow(inst, animationCompleted) {
      if (!animationCompleted) {
        if (!inst.$datepicker.find('.datepicker--buttons .datepicker--button-apply').length) {
          $('<span class="datepicker--button datepicker--button-apply">Применить</span>').on('click', function (e) {
            e.stopPropagation();
            inst.hide();
          }).appendTo(inst.$datepicker.find('.datepicker--buttons'));
        }
      }
    },
  });
})