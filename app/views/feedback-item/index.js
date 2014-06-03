var FeedbackItemIndexView = Ember.View.extend({
    _onDidInsertElement: Ember.on('didInsertElement', function() {
        var h = Hammer(document);
        console.log('_onDidInsertElement ');
        console.log(this.get('element'));
        var view = this;
        h.on("swipe", function(ev) {
            if (ev.gesture.direction === 'right') {
                view.get('controller').send('previousItem');
            } else {
                view.get('controller').send('nextItem');
            }
            return true;
        });
        return this._super(Array.prototype.slice.call(arguments));
    }),
});

export default FeedbackItemIndexView;
