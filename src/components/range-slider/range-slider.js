import ionRangeSlider from 'ion-rangeslider'

const showCurrent = function (data) {
  const current = document.querySelector('.range-slider__current')
  current.innerText = data.from_pretty + '₽' + ' - ' + data.to_pretty + '₽'
}

$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
  hide_min_max: true,
  prettify_separator: ' ',
  onChange: showCurrent,
  onStart: showCurrent,
});

