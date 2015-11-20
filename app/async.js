exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
    async: function (value) {
        return new Promise(function (resolve) {
            resolve(value);
        });
    },

    manipulateRemoteData: function (url) {
        return new Promise(function (resolve) {
            $.ajax(url).then(function (data) {
                resolve(data.people.map(function (item) {
                    return item.name;
                }).sort());
            });
        });
    }
};
