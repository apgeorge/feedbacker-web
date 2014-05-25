var FeedbackItem = DS.Model.extend({
    text: DS.attr('string'),
    feedbackSection: DS.belongsTo('feedback-section', { async: true }),
});


FeedbackItem.reopenClass({
    FIXTURES: [
        {
            id: 1,
            feedbackSection: 1,
            text: 'Nulla purus lacinia semper purus.'
        }, {
            id: 2,
            feedbackSection: 1,
            text: 'Etiam nulla scelerisque lobortis nisl potenti.'
        }, {
            id: 3,
            feedbackSection: 1,
            text: 'Porta morbi non magna amet condimentum iaculis pellentesque malesuada justo porta aliquam vivamus ridiculus arcu hac dui.'
        }, {
            id: 4,
            feedbackSection: 1,
            text: 'Vitae justo ante penatibus ligula elementum at hymenaeos condimentum imperdiet nunc.'
        }, {
            id: 5,
            feedbackSection: 2,
            text: 'Massa risus sem.'
        }, {
            id: 6,
            feedbackSection: 2,
            text: 'Lacus justo bibendum mus nibh maecenas nulla.'
        }, {
            id: 7,
            feedbackSection: 2,
            text: 'Porta vitae neque leo nisl aptent penatibus etiam morbi.'
        }, {
            id: 8,
            feedbackSection: 2,
            text: 'Justo lacus lorem a rhoncus nostra ac at morbi luctus molestie.'
        }, {
            id: 9,
            feedbackSection: 3,
            text: 'Vitae morbi conubia dictum fermentum ultrices in condimentum nisi.'
        }, {
            id: 10,
            feedbackSection: 3,
            text: 'Porta velit ullamcorper interdum curae eget ac ridiculus in eros purus fringilla.'
        }, {
            id: 11,
            feedbackSection: 3,
            text: 'Magna ipsum feugiat.'
        }, {
            id: 12,
            feedbackSection: 3,
            text: 'Justo netus integer ve tortor placerat blandit lorem curae lacinia ut nisi vulputate.'
        }, {
            id: 13,
            feedbackSection: 4,
            text: 'Purus risus laoreet pharetra lacinia.'
        }, {
            id: 14,
            feedbackSection: 4,
            text: 'Fames porta.'
        }, {
            id: 15,
            feedbackSection: 4,
            text: 'Nulla neque.'
        }, {
            id: 16,
            feedbackSection: 4,
            text: 'Class vitae mus duis blandit proin ad ornare.'
        }, {
            id: 17,
            feedbackSection: 5,
            text: 'Lacus nulla dis consequat massa fringilla magna.'
        }, {
            id: 18,
            feedbackSection: 5,
            text: 'Lacus etiam sociosqu in semper.'
        }, {
            id: 19,
            feedbackSection: 5,
            text: 'Netus velit porta sit pretium dictumst quis enim per.'
        }, {
            id: 20,
            feedbackSection: 5,
            text: 'Neque fusce posuere enim at.'
        }, {
            id: 21,
            feedbackSection: 6,
            text: 'Metus massa sociis eget arcu.'
        }, {
            id: 22,
            feedbackSection: 6,
            text: 'Nulla justo lobortis proin sed curae nec.'
        }, {
            id: 23,
            feedbackSection: 6,
            text: 'Ipsum lorem proin a eget porta tortor porttitor.'
        }, {
            id: 24,
            feedbackSection: 6,
            text: 'Risus nulla netus diam nascetur hendrerit nisi nibh luctus quisque pretium.'
        }, {
            id: 25,
            feedbackSection: 7,
            text: 'Felis augue.'
        }, {
            id: 26,
            feedbackSection: 7,
            text: 'Justo massa dictumst augue nam vestibulum et volutpat cursus ante felis ultrices dolor ve vulputate a mus.'
        }, {
            id: 27,
            feedbackSection: 7,
            text: 'Lacus neque risus varius convallis class hymenaeos quam lectus.'
        }, {
            id: 28,
            feedbackSection: 7,
            text: 'Justo curae vitae porta risus quam a.'
        }, {
            id: 29,
            feedbackSection: 8,
            text: 'Fusce velit est dui pellentesque augue id fringilla risus purus nonummy.'
        }, {
            id: 30,
            feedbackSection: 8,
            text: 'Fames velit massa luctus ornare consequat hymenaeos.'
        }, {
            id: 31,
            feedbackSection: 8,
            text: 'Netus massa est nunc ligula sapien fames.'
        }, {
            id: 32,
            feedbackSection: 8,
            text: 'Vitae metus inceptos.'
        }, {
            id: 33,
            feedbackSection: 9,
            text: 'Felis velit ultricies dis quam orci quam dignissim mauris aptent vivamus commodo vehicula integer.'
        }, {
            id: 34,
            feedbackSection: 9,
            text: 'Class risus ornare porta est turpis mollis ve viverra.'
        }, {
            id: 35,
            feedbackSection: 9,
            text: 'Purus lacus orci magna curabitur eu condimentum eros convallis.'
        }, {
            id: 36,
            feedbackSection: 9,
            text: 'Donec purus ipsum conubia.'
        }, {
            id: 37,
            feedbackSection: 10,
            text: 'Lorem nulla condimentum sit platea egestas mauris dui quisque.'
        }, {
            id: 38,
            feedbackSection: 10,
            text: 'Fusce felis lorem sapien fusce vel amet eni.'
        }, {
            id: 39,
            feedbackSection: 10,
            text: 'Donec etiam sem dictumst hendrerit sed elit et.'
        }, {
            id: 40,
            feedbackSection: 10,
            text: 'Augue porta.'
        }, {
            id: 41,
            feedbackSection: 11,
            text: 'Nulla etiam turpis non eros enim mus.'
        }, {
            id: 42,
            feedbackSection: 11,
            text: 'Purus nulla mauris dictum malesuada lorem vel amet a.'
        }, {
            id: 43,
            feedbackSection: 11,
            text: 'Morbi fusce vitae blandit dapibus cras.'
        }, {
            id: 44,
            feedbackSection: 11,
            text: 'Lacus justo.'
        }, {
            id: 45,
            feedbackSection: 12,
            text: 'Dolor nulla felis vitae habitasse pede vulputate auctor a.'
        }, {
            id: 46,
            feedbackSection: 12,
            text: 'Felis augue conubia proin enim pharetra class.'
        }, {
            id: 47,
            feedbackSection: 12,
            text: 'Nulla lorem velit class tristique scelerisque hac tellus ve lacinia erat.'
        }, {
            id: 48,
            feedbackSection: 12,
            text: 'Velit lorem sapien suspendisse netus dignissim.'
        }, {
            id: 49,
            feedbackSection: 13,
            text: 'Velit etiam proin praesent facilisis consectetuer parturient.'
        }, {
            id: 50,
            feedbackSection: 13,
            text: 'Massa lacus feugiat in turpis posuere nisi ut pellentesque vivamus fermentum nullam velit nisl semper eu.'
        }, {
            id: 51,
            feedbackSection: 13,
            text: 'Donec vitae luctus enim nisi vitae ac hendrerit morbi et vitae.'
        }, {
            id: 52,
            feedbackSection: 13,
            text: 'Purus class est erat imperdiet sociis a.'
        }, {
            id: 53,
            feedbackSection: 14,
            text: 'Augue curae.'
        }, {
            id: 54,
            feedbackSection: 14,
            text: 'Augue fames.'
        }, {
            id: 55,
            feedbackSection: 14,
            text: 'Etiam nulla nisl commodo.'
        }, {
            id: 56,
            feedbackSection: 14,
            text: 'Risus donec.'
        }, {
            id: 57,
            feedbackSection: 15,
            text: 'Vitae nulla turpis cursus commodo quis bibendum litora vivamus.'
        }, {
            id: 58,
            feedbackSection: 15,
            text: 'Augue neque enim platea nullam vivamus ve mus.'
        }, {
            id: 59,
            feedbackSection: 15,
            text: 'Vitae porta tristique nam leo consectetuer dolor.'
        }, {
            id: 60,
            feedbackSection: 15,
            text: 'Massa vitae amet urna justo vulputate orci eros feugiat ve felis phasellus senectus id porta ve in.'
        }, {
            id: 61,
            feedbackSection: 16,
            text: 'Class netus ante.'
        }, {
            id: 62,
            feedbackSection: 16,
            text: 'Curae donec pede facilisis mattis est adipiscing vestibulum id porttitor id.'
        }, {
            id: 63,
            feedbackSection: 16,
            text: 'Felis justo purus condimentum eni tellus volutpat eu aenean quisque id vel scelerisque feugiat.'
        }, {
            id: 64,
            feedbackSection: 16,
            text: 'Justo class.'
        }
    ]

});

export default FeedbackItem;
