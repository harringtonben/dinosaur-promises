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

var secondDinosaurJSON = function() {
    return new Promise(function(resolve, reject) {
        $.ajax("./data/dinosaurs2.json").done(function(data2) {
            resolve(data2.dinosaurs2);  
        }).fail(function(error2) {
            reject(error2);
        });
    });
};

var thirdDinosaurJSON = function() {
    return new Promise(function(resolve, reject) {
        $.ajax("./data/dinosaurs3.json").done(function(data3) {
            resolve(data3.dinosaurs3);  
        }).fail(function(error3) {
            reject(error3);
        });
    });
};

// PROMISE WORKS -- STILL PYRAMID OF DOOM
// var dinoGetter = function() {
//     firstDinosaurJSON().then(function(results) {
//         results.forEach(function(dino) {
//             dinosaurs.push(dino);
//         });
//         secondDinosaurJSON().then(function(results2) {
//             results2.forEach(function(dino) {
//                 dinosaurs.push(dino);
//             });
//         });
//             thirdDinosaurJSON().then(function(results3) {
//                 results3.forEach(function(dino) {
//                     dinosaurs.push(dino);
//                 });
//                 console.log(dinosaurs);
//             });  
//     }).catch(function(error) {
//         console.log("Error from dino1", error);
//     });
// };


// Correct Way to do things when it comes to promises
// var dinoGetter = function() {
//     firstDinosaurJSON().then(function(results) {
//         results.forEach(function(dino) {
//             dinosaurs.push(dino);
//         });
//         return secondDinosaurJSON();
//     }).then(function() {
//         secondDinosaurJSON().then(function(results) {
//             results.forEach(function(dino) {
//                 dinosaurs.push(dino);
//             });
//         return thirdDinosaurJSON();
//         }).then(function() {
//             thirdDinosaurJSON().then(function(results) {
//                 results.forEach(function(dino) {
//                     dinosaurs.push(dino);
//                 });
//             console.log(dinosaurs);
//             makeDinos();
//             });
//         });
//     });
// };

var dinoGetter = function() {
    Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()]).then(function(results){
        results.forEach(function(result) {
            result.forEach(function(dino) {
                dinosaurs.push(dino);
            });
        });
        makeDinos();
    }).catch(function(error) {
        console.log("error from Promise.all", error);
    });
};

var makeDinos = function() {
    dinosaurs.forEach(function(dino) {
        dom(dino);
    });
};

var initializer = function() {
    dinoGetter();
};

var getDinosaurs = function() {
    return dinosaurs;
};


module.exports = {initializer, getDinosaurs};

