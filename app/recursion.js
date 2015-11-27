exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
    listFiles: function (data, dirName) {
        var result = [];

        (function getFiles(dir, isInSubdirectory) {
            dir.files.forEach(function (item) {
                if (typeof item === 'string') {
                    if (isInSubdirectory) {
                        result.push(item);
                    }
                } else {
                    getFiles(item, isInSubdirectory || !dirName || item.dir === dirName);
                }
            });
        })(data, !dirName || dirName === data.dir)

        return result;
    },

    permute: function (arr) {
        var result = [];

        function permute(arr, memo) {
            var cur, memo = memo || [];

            for (var i = 0; i < arr.length; i++) {
                cur = arr.splice(i, 1);
                if (arr.length === 0) {
                    result.push(memo.concat(cur));
                }
                permute(arr.slice(), memo.concat(cur));
                arr.splice(i, 0, cur[0]);
            }

            return result;
        }

        return permute(arr);
    },

    fibonacci: function (n) {

    },

    validParentheses: function (n) {

    }
};
