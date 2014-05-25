var TalkEventRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('talk-event', params.talk_event_id);
    }

});

export default TalkEventRoute;
