"use strict";

const dom = require("./dom");

let dinosaurs = [];

const firstDinosaurJSON = ()=> {
    return new Promise((resolve, reject)=> {
        $.ajax("./data/dinosaurs.json").done((data1)=> {
            resolve(data1.dinosaurs1);  
        }).fail((error1)=> {
            reject(error1);
        });
    });
};

const secondDinosaurJSON = ()=> {
    return new Promise((resolve, reject)=> {
        $.ajax("./data/dinosaurs2.json").done((data2)=> {
            resolve(data2.dinosaurs2);  
        }).fail((error2)=> {
            reject(error2);
        });
    });
};

const thirdDinosaurJSON = ()=> {
    return new Promise((resolve, reject)=> {
        $.ajax("./data/dinosaurs3.json").done((data3)=> {
            resolve(data3.dinosaurs3);  
        }).fail((error3)=> {
            reject(error3);
        });
    });
};

const dinoGetter = ()=> {
    Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()]).then(function(results){
        results.forEach((result)=> {
            result.forEach((dino)=> {
                dinosaurs.push(dino);
            });
        });
        makeDinos();
    }).catch((error)=> {
        console.log("error from Promise.all", error);
    });
};

const makeDinos = ()=> {
    dinosaurs.forEach((dino)=> {
        dom(dino);
    });
};

const initializer = ()=> {
    dinoGetter();
};

const getDinosaurs = ()=> {
    return dinosaurs;
};


module.exports = {initializer, getDinosaurs};

