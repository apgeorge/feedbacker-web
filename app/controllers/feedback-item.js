var FeedbackItemController = Ember.ObjectController.extend({

    next: function() {
        return 2;
    }.property(),

    previous: function() {
        return 1;
    }.property(),

    swipeOptions: {
        // direction: Em.OneGestureDirection.Left | Em.OneGestureDirection.Right,
        cancelPeriod: 100,
    },

    swipeEnd: function(recognizer) {
        window.alert('swiped!');
    }

});

export default FeedbackItemController;
