var Feedback = DS.Model.extend({
    for: DS.belongsTo('talk-event', { async: true }),
    by: DS.belongsTo('user', { async: true }),
    date: DS.attr('string'),
    isAnonymous: DS.attr('boolean'),
    anonUserName: DS.attr('string'),
    anonUserEmail: DS.attr('string'),
    talkContent: DS.belongsTo('feedback-section', { async: true }),
    presentation: DS.belongsTo('feedback-section', { async: true }),
    summary: DS.attr('string')
});

Feedback.reopenClass({
    FIXTURES: [{
        id: 1,
        for: 1,
        by: 2,
        date: '23rd June 2013',
        isAnonymous: false,
        talkContent: 1,
        presentation: 2,
    }, {
        id: 2,
        for: 1,
        by: 3,
        date: '24th June 2013',
        isAnonymous: false,
        talkContent: 3,
        presentation: 4,
    }, {
        id: 3,
        for: 2,
        by: 2,
        date: '14th June 2013',
        isAnonymous: false,
        talkContent: 5,
        presentation: 6,
    }, {
        id: 4,
        for: 2,
        by: 3,
        date: '15th June 2013',
        isAnonymous: false,
        talkContent: 7,
        presentation: 8,
    }, {
        id: 5,
        for: 3,
        by: 2,
        date: '30th June 2013',
        isAnonymous: false,
        talkContent: 9,
        presentation: 10,
    }, {
        id: 6,
        for: 3,
        by: 3,
        date: '30th June 2013',
        isAnonymous: false,
        talkContent: 11,
        presentation: 12,
    }, {
        id: 7,
        for: 3,
        // by: null,
        date: '30th June 2013',
        isAnonymous: true,
        talkContent: 13,
        presentation: 14,
    }, {
        id: 8,
        for: 3,
        // by: null,
        date: '30th June 2013',
        isAnonymous: true,
        talkContent: 15,
        presentation: 16,
    }]
});


export default Feedback;
