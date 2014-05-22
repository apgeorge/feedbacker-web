export default DS.Model.extend({
    userid: DS.attr('string'),
    name: DS.attr('string'),
    email: DS.attr('string'),
    talks: DS.hasMany('talk', {async: true}),
});
