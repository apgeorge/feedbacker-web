var Talk = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    by: DS.belongsTo('user', { async: true }),
    events: DS.hasMany('talk-event', { async: true }),
});

Talk.reopenClass({
    FIXTURES: [{
        id: 1,
        title: 'Why I chose ember',
        description: 'A comparison of Ember Javascript MVC Framework with others' + 
        ' and how I came to choose Ember for building my application',
        by: 1,
        events: []
    }, {
        id: 2,
        title: 'Why LXCs are the future of virtualization',
        description: 'Linux Containers (LXCs) are a great light weight virtualization technique. This talk will' + 
        ' include a walkthrough of the various ways to create and configure a LXC' + 
        ' and explain what they are and how they are differnt from other forms of virtualization',
        by: 1,
        events: []
    },{
        id: 3,
        title: 'How Docker can revolutinize deployments',
        description: 'Come learn about the new hotness, Docker and how it' + 
        ' can make deployments easy and become the darling of your Ops team',
        by: 2,
        events: []
    }]
});


export default Talk;
