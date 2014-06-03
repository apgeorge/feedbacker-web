var FeedbackItemIndexController = Ember.ObjectController.extend({
    actions: {
        nextItem: function () {
            window.alert('next');
        },
        previousItem: function () {
            window.alert('previous');
        },
    }

});

export default FeedbackItemIndexController;
