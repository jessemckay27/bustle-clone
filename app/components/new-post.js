import Ember from 'ember';

export default Ember.Component.extend({
  isNewPost: false,
  actions: {
    savePost1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        text: this.get('text')
      };
      this.sendAction('savePost2', params);
      this.set('isNewPost', true);
    }
  }
});
