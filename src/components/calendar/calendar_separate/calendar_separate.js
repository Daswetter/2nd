import 'air-datepicker/dist/js/datepicker.js';
import './../datepicker.scss'
import './../calendar.scss'

import './calendar_separate.scss'
$(function() {
  $('.js-calendar__start').datepicker({
    range: true,
    multipleDatesSeparator: '-',
    language: "en",
    clearButton: true,
    prevHtml:'<span class="material-icons">arrow_back</span>',
    nextHtml:'<span class="material-icons">arrow_forward</span>',

    navTitles: {
      days: 'MM yyyy',
    },
    
    onSelect: function (fd, d, picker) { 
      $(".js-calendar__start").val(fd.split("-")[0]);
      $(".js-calendar__end").val(fd.split("-")[1]);
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
  });
  
});



  