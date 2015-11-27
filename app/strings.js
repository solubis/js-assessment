exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
    reduceString: function (str, amount) {
        var matches;

        while (matches = /(\w)\1{2,}/g.exec(str)) {
            str = str.replace(matches[0], matches[0].substr(0, amount));
        }

        return str;
    },
    wordWrap: function (str, cols) {

    },
    reverseString: function (str) {

    }
};
