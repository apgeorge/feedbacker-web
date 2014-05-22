export default DS.FixtureAdapter.extend({
    queryFixtures: function(records, query, type) {
        return records.filter(function(record) {
            for (var key in query) {
                if (!query.hasOwnProperty(key)) {
                    continue;
                }
                var value = query[key];
                // console.log('record key' + record[key]);
                // console.log('value key' + value);
                if (record[key] !== value) {
                    return false;
                }
            }
            return true;
        });
    }
});
