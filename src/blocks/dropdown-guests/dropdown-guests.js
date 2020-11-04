import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.js';

/* eslint-disable func-names */
(function ($) {
  $('.iqdropdown-clear').click(function(){
    controls: {
      resetCls: resetCls
    }
  })
  $('.iqdropdown_guests').iqDropdown({
    
    
    setSelectionText ( itemCount, totalItems) {
      if (totalItems==0){
        return `Сколько гостей`;
      }
      else {
        // const usePlural = totalItems !== 1 && this.textPlural.length > 0;
        // const text = usePlural ? this.textPlural : this.selectionText;
        const guest = [
          (itemCount.item1+itemCount.item2) == 1 ? 'гость' :
          (itemCount.item1+itemCount.item2) > 1 && (itemCount.item1+itemCount.item2) < 5 ? 'гостя' :
          'гостей'
        ];
        const baby = [
          itemCount.item3 == 0 ? '' :
          itemCount.item3 == 1 ? 'младенец' :
          itemCount.item3 > 1 && itemCount.item3 < 5 ? 'младенца' :
          'младенцев'
        ];
        if (itemCount.item3==0)
          return `${(itemCount.item1+itemCount.item2)} ${guest}`;
        else
          return `${(itemCount.item1+itemCount.item2)} ${guest}, ${itemCount.item3} ${baby}`;
      }   
    }
  });
  $(".button-increment").children().remove();
  $(".button-decrement").children().remove();
  
  $('.iqdropdown_guests .iqdropdown-selection').html('Сколько гостей');

  
  // $(".iqdropdown-clear").iqDropdown({
  //     controls: {
  //         resetCls: resetCls
  //     },
      // setSelectionText: setSelectionText,
      // onUpdateDisplay: ($this, totalItems) => {
      //     if (totalItems > 0) {
      //         $this.find(`.${resetCls}`).css("visibility", "visible");
      //       } else {
      //         $this.find(`.${resetCls}`).css("visibility", "hidden");
      //       }
      // }
  // });
}(jQuery));
