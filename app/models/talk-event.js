export default DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    for: DS.belongsTo('talk', { async: true }),
    location: DS.attr('string'),
    date: DS.attr('string'),
    feedbacks: DS.hasMany('feedback', { async: true }),
});
