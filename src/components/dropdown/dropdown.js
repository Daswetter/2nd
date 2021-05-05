import './dropdown.scss'
(function ($) {
  const defaults = {
    maxItems: Infinity,
    minItems: 0,
    selectionText: 'item',
    textPlural: 'items',
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-content',
      controlsCls: 'iqdropdown__item__controls',
      counterCls: 'iqdropdown__counter',
    },
    items: {},
    onChange: () => {},
    beforeDecrement: () => true,
    beforeIncrement: () => true,
    setSelectionText (itemCount, totalItems) {
      if (totalItems === 0){
        return `Сколько гостей`;
      }
      const guest = [
        (itemCount.item1 + itemCount.item2) === 1 ? 'гость' :
        (itemCount.item1 + itemCount.item2) > 1 && (itemCount.item1+itemCount.item2) < 5 ? 'гостя' :
        'гостей'
      ];
      const baby = [
        itemCount.item3 === 0 ? '' :
        itemCount.item3 === 1 ? 'младенец' :
        itemCount.item3 > 1 && itemCount.item3 < 5 ? 'младенца' :
        'младенцев'
      ];
      if (itemCount.item3 === 0) {
        return `${(itemCount.item1 + itemCount.item2)} ${guest}`;
      }
      return `${(itemCount.item1 + itemCount.item2)} ${guest}, ${itemCount.item3} ${baby}`;
    },
  };

  $.fn.iqDropdown = function (options) {
    this.each(function () {
      const $this = $(this);
      const $selection = $this.find('p.iqdropdown__selection').last();
      const $menu = $this.find('div.iqdropdown__menu');
      const $expand = $this.find('div.iqdropdown__expand')
      const $items = $menu.find('div.iqdropdown__menu__option');
      const $clear = $menu.find('.iqdropdown__clear');
      const $set = $menu.find('.iqdropdown__set');

      const dataAttrOptions = {
        selectionText: $selection.data('selection-text'),
        textPlural: $selection.data('text-plural'),
      };
      const settings = $.extend(true, {}, defaults, dataAttrOptions, options);
      const itemCount = {};
      let totalItems = 0;

      function updateDisplay () {
        $selection.html(settings.setSelectionText(itemCount, totalItems));
      }

      function setItemSettings (id, $item) {
        const minCount = Number($item.data('mincount'));
        const maxCount = Number($item.data('maxcount'));

        settings.items[id] = {
          minCount: Number.isNaN(Number(minCount)) ? 0 : minCount,
          maxCount: Number.isNaN(Number(maxCount)) ? Infinity : maxCount,
        };
      }

      function setInitialState() {
        const initial = $this.data('initial')
        console.log(initial);
        if(initial === 'open') {
          $this.addClass('iqdropdown__menu_open')
        }
      }
      setInitialState()
      
      function addControls (id, $item) {
        const $controls = $('<div />').addClass(settings.controls.controlsCls);
        const $decrementButton = $(`
          <button class="iqdropdown__button-decrement iqdropdown__button-decrement_active">
            <i class="icon-decrement"></i>
          </button>
        `);
        const $incrementButton = $(`
          <button class="iqdropdown__button-increment">
            <i class="icon-increment"></i>
          </button>
        `);
        const $counter = $(`<span>${itemCount[id]}</span>`).addClass(settings.controls.counterCls);

        $item.children('div').addClass(settings.controls.displayCls);
        $controls.append($decrementButton, $counter, $incrementButton);

        if (settings.controls.position === 'right') {
          $item.append($controls);
        } else {
          $item.prepend($controls);
        }

        function updateDecrementButton() {
          if (itemCount[id] === 0) {
            $decrementButton.addClass('iqdropdown__button-decrement_disable')
          } else {
            $decrementButton.removeClass('iqdropdown__button-decrement_disable')
            
          }
        }
        updateDecrementButton()

        function hideClear() {
          if (totalItems === 0) {
            $clear.css('display', 'none')
          } else {
            $clear.css('display', 'block')
          }
        }
        hideClear()

        $decrementButton.click((event) => {
          const { items, minItems, beforeDecrement, onChange } = settings;
          const allowClick = beforeDecrement(id, itemCount);

          if (allowClick && totalItems > minItems && itemCount[id] > items[id].minCount) {
            itemCount[id] -= 1;
            totalItems -= 1;
            $counter.html(itemCount[id]);
            updateDisplay();
            onChange(id, itemCount[id], totalItems);
          }

          updateDecrementButton()
          hideClear()
          event.preventDefault();
        });

        $incrementButton.click((event) => {
          const { items, maxItems, beforeIncrement, onChange } = settings;
          const allowClick = beforeIncrement(id, itemCount);

          if (allowClick && totalItems < maxItems && itemCount[id] < items[id].maxCount) {
            itemCount[id] += 1;
            totalItems += 1;
            $counter.html(itemCount[id]);
            updateDisplay();
            onChange(id, itemCount[id], totalItems);
          }
          updateDecrementButton()
          hideClear()

          event.preventDefault();
        });
        

        $clear.click(() => {
          totalItems = 0
          itemCount.item1 = 0
          itemCount.item2 = 0
          itemCount.item3 = 0
          $counter.html(itemCount[id])
          hideClear()
          updateDisplay()
          updateDecrementButton()
        })
        $item.click(event => event.stopPropagation());

        return $item;
      }

      $expand.click(() => {
        $this.toggleClass('iqdropdown__menu_open');
      });

      $set.click(() => {
        $this.toggleClass('iqdropdown__menu_open');
      });


      $items.each(function () {
        const $item = $(this);
        const id = $item.data('id');
        const defaultCount = Number($item.data('defaultcount') || '0');

        itemCount[id] = defaultCount;
        totalItems += defaultCount;
        setItemSettings(id, $item);
        addControls(id, $item);
      });

      updateDisplay();
    });

    return this;
  };
}(jQuery));

