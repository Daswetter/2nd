import ExpandableCheckbox from './ExpandableCheckbox';

$(() => {
  $('.js-expandable-checkbox').each((index, node) => {
    new ExpandableCheckbox($(node));
  });
});
