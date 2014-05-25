var Feedback = DS.Model.extend({
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

Feedback.reopenClass({
    FIXTURES: [{
        id: 1,
        for: 1,
        by: 2,
        date: '23rd June 2013',
        isAnonymous: false,
        sections: {
            content: {
                pros: [1,2],
                cons: [3,4]
            },
            presentation: {
                pros: [5],
                cons: [6,7]
            }
        }
    }, {
        id: 2,
        for: 1,
        by: 3,
        date: '24th June 2013',
        isAnonymous: false,
        sections: {
            content: {
                pros: [8,9],
                cons: [10,11]
            },
            presentation: {
                pros: [12,13],
                cons: [14,15]
            }
        }
    }, {
        id: 3,
        for: 2,
        by: 2,
        date: '14th June 2013',
        isAnonymous: false,
        sections: {
            content: {
                pros: [16,17],
                cons: [18,19]
            },
            presentation: {
                pros: [20,21],
                cons: [22,23]
            }
        }
    }, {
        id: 4,
        for: 2,
        by: 3,
        date: '15th June 2013',
        isAnonymous: false,
        sections: {
            content: {
                pros: [24,25],
                cons: [26,27]
            },
            presentation: {
                pros: [28,29],
                cons: [30,31]
            }
        }
    }, {
        id: 5,
        for: 3,
        by: 2,
        date: '30th June 2013',
        isAnonymous: false,
        sections: {
            content: {
                pros: [32,33],
                cons: [34,35]
            },
            presentation: {
                pros: [36,37],
                cons: [38,39]
            }
        }
    }, {
        id: 6,
        for: 3,
        by: 3,
        date: '30th June 2013',
        isAnonymous: false,
        sections: {
            content: {
                pros: [40,41],
                cons: [42,43]
            },
            presentation: {
                pros: [44,45],
                cons: [46,47]
            }
        }
    }, {
        id: 7,
        for: 3,
        // by: null,
        date: '30th June 2013',
        isAnonymous: true,
        sections: {
            content: {
                pros: [48,49],
                cons: [50,51]
            },
            presentation: {
                pros: [52,53],
                cons: [54,55]
            }
        }
    }, {
        id: 8,
        for: 3,
        // by: null,
        date: '30th June 2013',
        isAnonymous: true,
        sections: {
            content: {
                pros: [56,57],
                cons: [58,59]
            },
            presentation: {
                pros: [60,61],
                cons: [62,63]
            }
        }
    }]
});


export default Feedback;
