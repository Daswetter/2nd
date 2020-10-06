import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.js';

/* eslint-disable func-names */
(function ($) {
  $('.iqdropdown_rooms').iqDropdown({
    setSelectionText ( itemCount, totalItems) {
      const bedroom = [
        itemCount.item1 == 1 ? 'спальня' :
        itemCount.item1 > 1 && itemCount.item1 < 5 ? 'спальни' :
        'спален'
      ];
      const bed = [
        itemCount.item2 == 1 ? 'кровать' :
        itemCount.item2 > 1 && itemCount.item2 < 5 ? 'кровати' :
        'кроватей'
      ];
      const bathroom = [
        itemCount.item3 == 1 ? 'ванная комната' :
        itemCount.item3 > 1 && itemCount.item3 < 5 ? 'ванные комнаты' :
        'ванных комнат'
      ];
      return `${itemCount.item1} ${bedroom},${itemCount.item2} ${bed},${itemCount.item3} ${bathroom}`;
      }
      
    });
    function addControls (id, $item) {
      const $incrementButton = $(`
          <button class="button-increment">
            <i class="icon-increment"></i>
          </button>
        `);
    }
}(jQuery));
