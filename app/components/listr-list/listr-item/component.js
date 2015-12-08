import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  strikethrough: false,
  click: function () {
    this.toggleProperty('strikethrough');
  },
});
