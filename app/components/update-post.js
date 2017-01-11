import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        text: this.get('text')
      };
      this.sendAction('update', post, params);
    }
  }
});
