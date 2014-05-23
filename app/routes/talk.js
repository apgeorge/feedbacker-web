var TalkRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('talk', params.talk_id);
    }
});

export default TalkRoute;
