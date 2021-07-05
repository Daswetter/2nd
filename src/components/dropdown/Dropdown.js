class Dropdown {
  constructor($component, rooms) {
    this.$component = $component;
    this.init(rooms);
  }

  static setSelectionTextForGuests(itemCount, totalItems) {
    if (totalItems === 0) {
      return 'Сколько гостей';
    }
    let guest;
    if (itemCount.item1 + itemCount.item2 === 1) {
      guest = 'гость';
    } else if ((itemCount.item1 + itemCount.item2) > 1 && (itemCount.item1 + itemCount.item2) < 5) {
      guest = 'гостя';
    } else {
      guest = 'гостей';
    }
    let baby;
    if (itemCount.item3 === 0) {
      baby = '';
    } else if (itemCount.item3 === 1) {
      baby = 'младенец';
    } else if (itemCount.item3 > 1 && itemCount.item3 < 5) {
      baby = 'младенца';
    } else {
      baby = 'младенцев';
    }

    if (itemCount.item3 === 0) {
      return `${(itemCount.item1 + itemCount.item2)} ${guest}`;
    }
    return `${(itemCount.item1 + itemCount.item2)} ${guest}, ${itemCount.item3} ${baby}`;
  }

  static setSelectionTextForRooms(itemCount) {
    let bedroom;
    if (itemCount.item1 === 1) {
      bedroom = 'спальня';
    } else if (itemCount.item1 > 1 && itemCount.item1 < 5) {
      bedroom = 'спальни';
    } else {
      bedroom = 'спален';
    }
    let bed;
    if (itemCount.item2 === 1) {
      bed = 'кровать';
    } else if (itemCount.item2 > 1 && itemCount.item2 < 5) {
      bed = 'кровати';
    } else {
      bed = 'кроватей';
    }
    let bathroom;
    if (itemCount.item3 === 1) {
      bathroom = 'ванная комната';
    } else if (itemCount.item3 > 1 && itemCount.item3 < 5) {
      bathroom = 'ванные комнаты';
    } else {
      bathroom = 'ванных комнат';
    }
    return `${itemCount.item1} ${bedroom}, ${itemCount.item2} ${bed}, ${itemCount.item3} ${bathroom}`;
  }

  init(rooms) {
    let selectionText;
    if (rooms) {
      selectionText = Dropdown.setSelectionTextForRooms;
    } else {
      selectionText = Dropdown.setSelectionTextForGuests;
    }
    const defaults = {
      maxItems: Infinity,
      minItems: 0,
      controls: {
        position: 'right',
        displayCls: 'dropdown__content',
        controlsCls: 'dropdown__item-controls',
        counterCls: 'dropdown__counter',
      },
      items: {},
      beforeDecrement: () => true,
      beforeIncrement: () => true,
      setSelectionText: selectionText,
    };
    const $this = this.$component;
    const $selection = $this.find('p.js-dropdown__selection').last();
    const $menu = $this.find('div.js-dropdown__menu');
    const $expand = $this.find('div.js-dropdown__expand');
    const $items = $menu.find('div.js-dropdown__menu-option');
    const $clear = $menu.find('.js-dropdown__clear');
    const $set = $menu.find('.js-dropdown__set');

    const dataAttrOptions = {
      selectionText: $selection.data('selection-text'),
      textPlural: $selection.data('text-plural'),
    };
    const settings = $.extend(true, {}, defaults, dataAttrOptions);
    const itemCount = {};
    let totalItems = 0;
    function updateDisplay() {
      $selection.html(settings.setSelectionText(itemCount, totalItems));
    }

    function setItemSettings(id, $item) {
      const minCount = Number($item.data('mincount'));
      const maxCount = Number($item.data('maxcount'));

      settings.items[id] = {
        minCount: Number.isNaN(Number(minCount)) ? 0 : minCount,
        maxCount: Number.isNaN(Number(maxCount)) ? Infinity : maxCount,
      };
    }

    function setInitialState() {
      const initial = $this.data('initial');
      if (initial === 'open') {
        $this.addClass('dropdown__menu_open');
      }
    }
    setInitialState();
    function addControls(id, $item) {
      const $controls = $('<div />').addClass(settings.controls.controlsCls);
      const $decrementButton = $(`
        <button class="dropdown__button-decrement dropdown__button-decrement_active">
          <i class="icon-decrement"></i>
        </button>
      `);
      const $incrementButton = $(`
        <button class="dropdown__button-increment">
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
          $decrementButton.addClass('dropdown__button-decrement_disable');
        } else {
          $decrementButton.removeClass('dropdown__button-decrement_disable');
        }
      }
      updateDecrementButton();

      function hideClear() {
        if (totalItems === 0) {
          $clear.css('display', 'none');
        } else {
          $clear.css('display', 'block');
        }
      }
      hideClear();

      $decrementButton.click((event) => {
        const { items, minItems, beforeDecrement } = settings;
        const allowClick = beforeDecrement(id, itemCount);

        if (allowClick && totalItems > minItems && itemCount[id] > items[id].minCount) {
          itemCount[id] -= 1;
          totalItems -= 1;
          $counter.html(itemCount[id]);
          updateDisplay();
        }

        updateDecrementButton();
        hideClear();
        event.preventDefault();
      });

      $incrementButton.click((event) => {
        const { items, maxItems, beforeIncrement } = settings;
        const allowClick = beforeIncrement(id, itemCount);

        if (allowClick && totalItems < maxItems && itemCount[id] < items[id].maxCount) {
          itemCount[id] += 1;
          totalItems += 1;
          $counter.html(itemCount[id]);
          updateDisplay();
        }
        updateDecrementButton();
        hideClear();

        event.preventDefault();
      });
      $clear.click(() => {
        totalItems = 0;
        itemCount.item1 = 0;
        itemCount.item2 = 0;
        itemCount.item3 = 0;
        $counter.html(itemCount[id]);
        hideClear();
        updateDisplay();
        updateDecrementButton();
      });
      $item.click((event) => event.stopPropagation());

      return $item;
    }

    $expand.click(() => {
      $this.toggleClass('dropdown__menu_open');
    });

    $selection.on('click', () => {
      $this.toggleClass('dropdown__menu_open');
    });

    $set.click(() => {
      $this.toggleClass('dropdown__menu_open');
    });

    $(document).on('click', (event) => {
      if (!$(event.target).closest($this).length) {
        $this.removeClass('dropdown__menu_open');
      }
    });

    $items.each(function count() {
      const $item = $(this);
      const id = $item.data('id');
      const defaultCount = Number($item.data('defaultcount') || '0');

      itemCount[id] = defaultCount;
      totalItems += defaultCount;
      setItemSettings(id, $item);
      addControls(id, $item);
    });

    updateDisplay();
  }
}

export default Dropdown;
