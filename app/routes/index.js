export default Ember.Route.extend({
    model: function () {
        return this.store.find('talk', { by: 1});
    }
});
