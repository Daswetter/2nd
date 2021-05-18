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
    
  
  });
  $('.datepicker--buttons').append('<span class="datepicker--button datepicker--button-apply">Применить</span>')
})