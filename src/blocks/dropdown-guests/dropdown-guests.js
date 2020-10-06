import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.js';

/* eslint-disable func-names */
(function ($) {
    $('.iqdropdown_guests').iqDropdown({
        setSelectionText ( itemCount, totalItems) {
            if (totalItems==0){
                return `Сколько гостей`;
            }
            else {
                const usePlural = totalItems !== 1 && this.textPlural.length > 0;
                const text = usePlural ? this.textPlural : this.selectionText;
                const guest = [
                    totalItems == 1 ? 'гость' :
                    totalItems > 1 && totalItems < 5 ? 'гостя' :
                    'гостей'
                ];
                return `${totalItems} ${guest}`;
            }   
        }
    });
    $(".button-increment").children().remove();
    $(".button-decrement").children().remove();
    
    $('.iqdropdown_guests .iqdropdown-selection').html('Сколько гостей');
}(jQuery));
