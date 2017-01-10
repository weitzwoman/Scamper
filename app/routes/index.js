import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
     stories: this.store.findAll('story'),
     features: this.store.query('story', { feature: true });
    });
  },
});
