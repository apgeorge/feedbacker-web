var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
    this.resource('talk', { path: '/talk/:talk_id'});
});

export default Router;
