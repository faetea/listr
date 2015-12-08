import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  items: ['Sleeps', 'Kittens', 'Star Wars', 'Coffee', 'Paint'],
  hidden: false,
  actions: {
    toggleList: function() {
      this.toggleProperty('isHidden');
    },
    // toggleList: function () {
    // this.get('hidden') ? this.set('hidden', false) : this.set('hidden', true);
    // }
  }
});



