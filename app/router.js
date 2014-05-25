var Router = Ember.Router.extend({
    location: ENV.locationType
});

Router.map(function() {
    this.resource('talk', { path: '/talk/:talk_id' }, function() {
        this.resource('talk-event', { path: 'talk-event/:talk_event_id' }, function() {
                this.resource('feedback', { path: 'feedback/:feedback_id' }, function() {
                    this.resource('feedback-item', { path: 'feedback-item/feed_back_item_id' });
                });
            });
        });
});

export default Router;
