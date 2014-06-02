var FeedbackItemIndexController = Ember.ObjectController.extend({

    next: function() {
        return 2;
    }.property(),

    previous: function() {
        return 1;
    }.property(),
});

export default FeedbackItemIndexController;
