export default DS.Model.extend({
    for: DS.belongsTo('talk-event', { async: true }),
    by: DS.belongsTo('user', { async: true }),
    date: DS.attr('string'),
    isAnonymous: DS.attr('boolean'),
    anonUserName: DS.attr('string'),
    anonUserEmail: DS.attr('string'),
    sections: {
        content: {
            pros: DS.hasMany('feedback-item', { async : true }),
            cons: DS.hasMany('feedback-item', { async : true }),
        },
        presentation: {
            pros: DS.hasMany('feedback-item', { async : true }),
            cons: DS.hasMany('feedback-item', { async : true }),
        }
    },
});
