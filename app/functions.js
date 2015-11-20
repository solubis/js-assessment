exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn.apply(null, arr);
    },

    speak: function (fn, obj) {
        return fn.call(obj);
    },

    functionFunction: function (str) {
        return function (str2) {
            return str + ', ' + str2;
        };
    },

    makeClosures: function (arr, fn) {
        var i = 0,
            length = arr.length,
            result = [];

        function makeFn(number) {
            return function () {
                return fn(arr[number]);
            };
        }

        for (; i < length; i++) {
            result.push(makeFn(i));
        }
        return result;
    },

    partial: function (fn, str1, str2) {
        return function (str3) {
            return fn.call(null, str1, str2, str3);
        };
    },

    useArguments: function () {
        var args = [].slice.call(arguments);

        return args.reduce(function (prev, item) {
            return prev + item;
        }, 0);
    },

    callIt: function (fn) {
        var args = [].slice.call(arguments, 1, arguments.length);

        return fn.apply(null, args);
    },

    partialUsingArguments: function (fn) {
        var args = [].slice.call(arguments, 1, arguments.length);

        return function () {
            var argsRest = [].slice.call(arguments);

            return fn.apply(null, args.concat(argsRest));
        }
    },

    curryIt: function (fn) {
        return function curryHelper(arg) {
            curryHelper.args = curryHelper.args || [];
            curryHelper.args.push(arg);
            
            if (curryHelper.args.length === fn.length){
                return fn.apply(null, curryHelper.args);
            } else {
                return curryHelper;
            }
        }
    }
};
