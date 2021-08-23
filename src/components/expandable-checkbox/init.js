import ExpandableCheckbox from './ExpandableCheckbox';

$(() => {
  $('.js-expandable-checkbox').each((_, node) => {
    new ExpandableCheckbox($(node));
  });
});
