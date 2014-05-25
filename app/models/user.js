var User = DS.Model.extend({
    userid: DS.attr('string'),
    name: DS.attr('string'),
    email: DS.attr('string'),
    talks: DS.hasMany('talk', {async: true}),
});

User.reopenClass({
    FIXTURES: [{
        id: 1,
        userid: 'arojg',
        name: 'Aroj George',
        email: 'arojis@gmail.com',
        talks: []
    }, {
        id: 2,
        userid: 'jdale',
        name: 'John Dale',
        email: 'johndale@gmail.com',
        talks: []
    }, {
        id: 3,
        userid: 'jane-dale',
        name: 'Jane Dale',
        email: 'janedale@gmail.com',
        talks: []
    }]
});


export default User;

