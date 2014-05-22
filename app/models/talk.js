export default DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    by: DS.belongsTo('user', { async: true }),
    events: DS.hasMany('talk-event', { async: true }),
});
