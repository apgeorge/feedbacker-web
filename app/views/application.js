var ApplicationView = Ember.View.extend({
   didInsertElement: function () {
       this._hammer = new Hammer(this.get('element'));
   },
   willDestroyElement: function() {
       this._hammer.dispose();
       this._hammer = null;
   },
});

export default ApplicationView;
