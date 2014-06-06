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
    didInsertElement: function(){
        this.$('.slider').addClass('slide-in-left-done');
        console.log('didInsertElement...');
    },
    willClearRender: function(){
        console.log('willClearRender');
    },
    willDestroyElement: function () {
        console.log('willDestroyElement');
    },
});

export default FeedbackItemIndexView;
