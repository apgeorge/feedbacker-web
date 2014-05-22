export default DS.Model.extend({
    text: DS.attr('string'),
    feedback: DS.belongsTo('feedback', { async: true }),
});
