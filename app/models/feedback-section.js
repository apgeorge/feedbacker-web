var FeedbackSection = DS.Model.extend({
    feedback: DS.belongsTo('feedback', { async: true }),
    pros: DS.hasMany('feedback-item', { async: true }),
    cons: DS.hasMany('feedback-item', { async: true }),
});

FeedbackSection.reopenClass({
    FIXTURES: [{
        id: 1,
        feedback: 1,
        pros: [1, 2],
        cons: [3, 4]
    }, {
        id: 2,
        feedback: 1,
        pros: [5, 6],
        cons: [7, 8]
    }, {
        id: 3,
        feedback: 2,
        pros: [9, 10],
        cons: [11, 12]
    }, {
        id: 4,
        feedback: 2,
        pros: [13, 14],
        cons: [15, 16]
    }, {
        id: 5,
        feedback: 3,
        pros: [17, 18],
        cons: [19, 20]
    }, {
        id: 6,
        feedback: 3,
        pros: [21, 22],
        cons: [23, 24]
    }, {
        id: 7,
        feedback: 4,
        pros: [25, 26],
        cons: [27, 28]
    }, {
        id: 8,
        feedback: 4,
        pros: [29, 30],
        cons: [31, 32]
    }, {
        id: 9,
        feedback: 5,
        pros: [33, 34],
        cons: [35, 36]
    }, {
        id: 10,
        feedback: 5,
        pros: [37, 38],
        cons: [39, 40]
    }, {
        id: 11,
        feedback: 6,
        pros: [41, 42],
        cons: [43, 44]
    }, {
        id: 12,
        feedback: 6,
        pros: [45, 46],
        cons: [47, 48]
    }, {
        id: 13,
        feedback: 7,
        pros: [49, 50],
        cons: [51, 52]
    }, {
        id: 14,
        feedback: 7,
        pros: [53, 54],
        cons: [55, 56]
    }, {
        id: 15,
        feedback: 8,
        pros: [57, 58],
        cons: [59, 60]
    }, {
        id: 16,
        feedback: 8,
        pros: [61, 62],
        cons: [63, 64]
    }]
});

export default FeedbackSection;
