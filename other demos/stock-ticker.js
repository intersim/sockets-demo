var events = require('events');
var EventEmitter = events.EventEmitter;
var stockTicker = new EventEmitter();

// Using event emitters in Node.
(function () {

    var randomElement = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    var companies = ['MSFT', 'GOOG', 'YHO', 'APP'];

    setInterval(function () {
        var company = randomElement(companies);
        var newRating = Math.random();
        stockTicker.emit('tick', company, newRating);
    }, 1000);

})();

module.exports = stockTicker;