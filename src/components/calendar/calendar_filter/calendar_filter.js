import 'air-datepicker/dist/js/datepicker.js';
import './../datepicker.scss'
import './../calendar.scss'
import './calendar_filter.scss'

$.fn.datepicker.language['ru'] =  {
  days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
  daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
  daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
  months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
  monthsShort: ['янв','фев','март','апр','май','июнь','июль','авг','сен','окт','ноя','дек'],
  today: 'Сегодня',
  clear: 'Очистить',
  dateFormat: 'dd.mm.yyyy',
  timeFormat: 'hh:ii',
  firstDay: 1
};

$(function() {
  
  const calendarFilter = $('.js-calendar__filter-input').datepicker({
    
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
  $('.js-calendar__filter-input ~ .calendar__expand').click( function() {
    calendarFilter.data('datepicker').show()
  })
});



  