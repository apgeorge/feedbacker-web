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

export default FeedbackItemIndexView;
