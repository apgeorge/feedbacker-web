var FeedbackItemIndexView = Ember.View.extend({
    animateIn: function(done) {
        this.$().fadeTo(250, 1, done);
    },
    willAnimateIn: function() {
        this.$().css('opacity', 0);
    },
    animateOut: function(done) {
        this.$().fadeTo(250, 0, done);
    },
    dragLeft: function(ev) {
        console.log('dragged left');
        this._left();
        ev.originalEvent.gesture.stopDetect();
    },
    dragRight: function(ev) {
        console.log('dragged right');
        this._right();
        ev.originalEvent.gesture.stopDetect();
    },
    swipeLeft: function(ev) {
        console.log('swiped left');
        this._left();
        ev.originalEvent.gesture.stopDetect();
    },
    swipeRight: function(ev) {
        console.log('swiped right');
        this._right();
        ev.originalEvent.gesture.stopDetect();
    },
    _left: function() {
        this.get('controller').send('previousItem');
    },
    _right: function() {
        this.get('controller').send('nextItem');
    },
});

export default FeedbackItemIndexView;
