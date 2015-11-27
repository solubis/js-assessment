exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers = {
    alterContext: function (fn, obj) {
        return fn.bind(obj)();
    },

    alterObjects: function (constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate: function (obj) {
        var result = [];
        
        for (var i in obj){
            if (obj.hasOwnProperty(i)){
                result.push(i + ': ' + obj[i]);
            }
        }
        
        return result;
    }
};
