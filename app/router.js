var Router = Ember.Router.extend({
    location: ENV.locationType
});

Router.map(function() {
    this.resource('talk', { path: '/talk/:talk_id' }, function() {
        this.resource('talk-event', { path: 'talk-event/:talk_event_id' }, function() {
                this.resource('feedback', { path: 'feedback/:feedback_id' }, function() {
                    this.resource('feedback-item', { path: 'feedback-item/:feedback_item_id' }, function () {
                        
                    });
                });
            });
        });
});

export default Router;

// http://localhost:4200/talk/1/talk-event/3/feedback/33/feedback-item/feed_back_item_id
// http://localhost:4200/talk/1/talk-event/3/feedback/5/feedback-item/33
