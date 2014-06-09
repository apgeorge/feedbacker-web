var FeedbackIndexView = Ember.View.extend({
    didInsertElement: function() {
        console.log('F:didInsertElement...');
    },
    willClearRender: function() {
        console.log('F:willClearRender');
    },
    willDestroyElement: function() {
        console.log('F:willDestroyElement');
    },
    animateIn: function(done) {
        console.log('F:animateIn');
        this.$().fadeTo(250, 1, done);
    },
    willAnimateIn: function() {
        console.log('F:willAnimateIn');
        this.$().css("opacity", 0);
    },
    animateOut: function(done) {
        console.log('F:animateOut');
        this.$().fadeTo(250, 0, done);
    },
});

export default FeedbackIndexView;
