import ionRangeSlider from 'ion-rangeslider';

$(".js-range-slider").ionRangeSlider({
    type: "double",
    // skin: "round",
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    onChange: function (data) {
        console.dir(data);
    },
    hide_min_max:true,
    hide_from_to:true
});

// $d4.on("change", function () {
//     var $inp = $(this);
//     var v = $inp.prop("value");     // input value in format FROM;TO
//     var from = $inp.data("from");   // input data-from attribute
//     var to = $inp.data("to");       // input data-to attribute

//     console.log(from, to);       // all values
// });