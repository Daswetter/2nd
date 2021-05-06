import 'air-datepicker/dist/js/datepicker.js';
import './../calendar.scss'

$(function() {
  $('.js-calendar_constant').datepicker({
    inline: true,
    range: true,
    multipleDatesSeparator: ' - ',
    clearButton: true,
    prevHtml:'<span class="material-icons">arrow_back</span>',
    nextHtml:'<span class="material-icons">arrow_forward</span>',

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
    }
  });

  
});



  