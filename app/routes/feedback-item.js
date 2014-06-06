var FeedbackItemRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('feedback-item', params.feedback_item_id);
    },

    actions: {

        willTransition: function(transition) {
            console.log('willTransition');
            if ($('.slider').is('.slide-in-left-done')) {
                console.log('aborting...');
                transition.abort();
                $('.slider').one('webkitTransitionEnd', function() {
                    console.log('transition end');
                    Ember.run( function () {
                        console.log('retry');
                        transition.retry();
                    } );
                });
                $('.slider').removeClass('slide-in-left-done');
            }
            return true;
        }

    },

});

export default FeedbackItemRoute;
