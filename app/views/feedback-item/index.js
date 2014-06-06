var FeedbackItemIndexView = Ember.View.extend({
    _onDidInsertElement: Ember.on('didInsertElement', function() {
        var h = Hammer(document);
        console.log('_onDidInsertElement ');
        console.log(this.get('element'));
        var view = this;
        h.on("swipeleft dragleft", function(ev) {
            view.get('controller').send('previousItem');
            return false;
        });
        h.on("swiperight dragright", function(ev) {
            view.get('controller').send('nextItem');
            return false;
        });
        return this._super(Array.prototype.slice.call(arguments));
    }),
    didInsertElement: function() {
        console.log('didInsertElement...');
    },
    willClearRender: function() {
        console.log('willClearRender');
    },
    willDestroyElement: function() {
        console.log('willDestroyElement');
    },
    animateIn: function(done) {
        console.log('animateIn');
        this.$('.slider').addClass('slide-in-left-done');
        done();
    },
    willAnimateIn: function() {
        console.log('willAnimateIn');
        // this.$('.slider').addClass('slide-in-left');
    },
    animateOut: function(done) {
        console.log('animateOut');
        this.$('.slider').removeClass('slide-in-left-done');
        this.$('.slider').one('webkitTransitionEnd', function () {
            console.log('transition end');
            done();
        });
    },
});

export default FeedbackItemIndexView;
