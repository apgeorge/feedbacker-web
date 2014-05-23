var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
    this.resource('talk', { path: '/talk/:talk_id'});
    this.resource('talk-event', { path: '/talk/:talk_id/event/:talk_event_id'});
});

export default Router;
