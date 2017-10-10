"use strict";

const dom = require("./dom");

var dinosaurs = [];

//Old Crappy way of doing it
// var dinoGetter = function() {
//     $.ajax("./data/dinosaurs.json").done(function(data1){
//         data1.dinosaurs1.forEach(function(dino) {
//             dinosaurs.push(dino);
//         });
//         $.ajax("./data/dinosaurs.json").done(function(data2) {
//             data2.dinosaurs2.forEach(function(dino) {
//                 dinosaurs.push(dino);
//             });
//         });
//         console.log(dinosaurs);
//     });
// };

var firstDinosaurJSON = function() {
    return new Promise(function(resolve, reject) {
        $.ajax("./data/dinosaurs.json").done(function(data1) {
            resolve(data1.dinosaurs1);  
        }).fail(function(error1) {
            reject(error1);
        });
    });
};

var dinoGetter = function() {
    firstDinosaurJSON().then(function(results) {
        console.log("results from dino1", results);
    }).catch(function(error) {
        console.log("Error from dino1", error);
    });
};

var initializer = function() {
    dinoGetter();
};

var getDinosaurs = function() {
    return dinosaurs;
};

module.exports = {initializer, getDinosaurs};

