var FeedbackRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('feedback', params.feedback_id);
    }
});

export default FeedbackRoute;
