var FeedbackItemRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('feedback-item', params.feedback_item_id);
    },
});

export default FeedbackItemRoute;
