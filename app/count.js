exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
    count: function (start, end) {
        var timeout;

        function tick() {
            console.log(start++);

            if (start <= end) {
                timeout = window.setTimeout(tick, 100);
            }
        }

        tick();

        return {
            cancel: function () {
                timeout && window.clearTimeout(timeout);
            }
        };
    }
};
