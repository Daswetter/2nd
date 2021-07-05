import 'air-datepicker';

$.fn.datepicker.language.ru = {
  days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
  daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthsShort: ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'],
  today: 'Сегодня',
  clear: 'Очистить',
  dateFormat: 'dd.mm.yyyy',
  timeFormat: 'hh:ii',
  firstDay: 1,
};

class Calendar {
  constructor($component, type) {
    this.$component = $component;
    this.init(type);
  }

  init(type) {
    let options = {
      range: true,
      clearButton: true,
      prevHtml: '<span class="material-icons">arrow_back</span>',
      nextHtml: '<span class="material-icons">arrow_forward</span>',
      navTitles: {
        days: 'MM yyyy',
      },
    };
    if (type === 'separate') {
      options = {
        ...options,
        onSelect: Calendar.splitDate,
        onShow: Calendar.setShow,
      };
    } else if (type === 'filter') {
      options = {
        ...options,
        multipleDatesSeparator: ' - ',
        dateFormat: 'd M',
        onShow: Calendar.setShow,
      };
    }
    const $calendar = (this.$component).datepicker(options);
    (this.$component).next('.js-calendar__expand').on('click', Calendar.setClickListener.bind(null, $calendar));

    if (type === 'constant') {
      this.addSetButton();
    }
  }

  static splitDate(fd) {
    $('.js-calendar__start').val(fd.split(',')[0]);
    $('.js-calendar__end').val(fd.split(',')[1]);
  }

  static setShow(inst, animationCompleted) {
    if (!animationCompleted) {
      if (!inst.$datepicker.find('.datepicker--buttons .datepicker--button-apply').length) {
        $('<span class="datepicker--button datepicker--button-apply">Применить</span>').on('click', (event) => {
          event.stopPropagation();
          inst.hide();
        }).appendTo(inst.$datepicker.find('.datepicker--buttons'));
      }
    }
  }

  static setClickListener($calendar) {
    $calendar.data('datepicker').show();
  }

  addSetButton() {
    $('.datepicker--buttons', this.$component).append('<span class="datepicker--button datepicker--button-apply">Применить</span>');
  }
}

export default Calendar;
