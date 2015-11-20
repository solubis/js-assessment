exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf: function (arr, item) {
        return arr.indexOf(item);
    },

    sum: function (arr) {
        return arr.reduce(function (sum, item) {
            return sum + item;
        });
    },

    remove: function (arr, item) {
        return arr.filter(function (i) {
            return i !== item;
        });
    },

    removeWithoutCopy: function (arr, item) {
        var index = 0;

        while ((index = arr.indexOf(item)) >= 0) {
            arr.splice(index, 1);
        }

        return arr;
    },

    append: function (arr, item) {
        arr.push(item);

        return arr;
    },

    truncate: function (arr) {
        arr.splice(arr.length - 1, 1);

        return arr;
    },

    prepend: function (arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function (arr) {
        arr.splice(0, 1);

        return arr;
    },

    concat: function (arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function (arr, item) {
        return arr.reduce(function (count, i) {
            if (item === i) {
                count++;
            }
            return count;
        }, 0);
    },

    duplicates: function (arr) {
        return arr.reduce(function (dups, item, index) {
            if (arr.indexOf(item, index + 1) >= 0 && dups.indexOf(item) < 0) {
                dups.push(item);
            }
            return dups;
        }, []);
    },

    square: function (arr) {
        return arr.map(function (item) {
            return item * item;
        });
    },

    findAllOccurrences: function (arr, target) {
        var i, length = arr.length;
        var result = [];

        for (i = 0; i < length; i++) {
            if (arr[i] === target){
                result.push(i);
            }
        }

        return result;
    }
};
