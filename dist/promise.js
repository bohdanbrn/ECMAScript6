'use strict';

function applyForVisa(documents) {
    console.log('Application processing...');

    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({ 111: "2222" }) : reject('The visa is denied');
        }, 1000);
    });
    return promise;
}

function getVisa(visa) {
    console.log('Visa is received');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve(visa);
        }, 1000);
    });
}

function bookHotel(visa) {
    console.log('Visa:', visa);
    console.log('Book hotel');
    return Promise.resolve(visa);
}

function buyTickets(booking) {
    console.log('Buy tickets');
    console.log('Book:', booking);
}

applyForVisa({}).then(getVisa).then(bookHotel).then(buyTickets).catch(function (error) {
    return console.error(error);
}).then(function () {
    return console.log("I'm still here");
});