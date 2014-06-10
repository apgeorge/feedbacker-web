var FeedbackItemIndexController = Ember.ObjectController.extend({
    actions: {
        nextItem: function () {
            console.log('controller:next');
        },
        previousItem: function () {
            console.log('controller:previous');
        },
    }

});

export default FeedbackItemIndexController;
