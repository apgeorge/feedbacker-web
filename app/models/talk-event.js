var TalkEvent = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    for: DS.belongsTo('talk', { async: true }),
    location: DS.attr('string'),
    date: DS.attr('string'),
    isTrialRun: DS.attr('boolean'),
    audience: DS.attr('string'),
    feedbacks: DS.hasMany('feedback', { async: true }),
});

TalkEvent.reopenClass({
    FIXTURES: [{
            id: 1,
            name: 'Trial run in Pune office',
            description: 'Just a trial run in front of a few friends',
            for: 1,
            location: 'TW Pune office',
            date: '23rd June 2013',
            isTrialRun: true,
            audience: 'My friends in Pune office',
            feedbacks: [1,2]
        }, {
            id: 2,
            name: 'Demo to friends',
            description: 'For a couple of friends',
            for: 1,
            location: 'Home',
            date: '14th June 2013',
            isTrialRun: true,
            audience: 'John Dale and Joe Dale',
            feedbacks: [3,4]
        }, {
            id: 3,
            name: 'GeekNight',
            description: 'The monthly Geeknight',
            for: 1,
            location: 'TW Pune office',
            date: '30th June 2013',
            isTrialRun: false,
            audience: 'Attendees of the Geeknight event',
            feedbacks: [5,6,7,8]
        },

    ]
});

export default TalkEvent; 
