"use strict";

let outputDiv = $("#dinosaur");

const domString = (dino) => {
    var domString = '';
    domString += `<div class=${dino.info == 'Carnivore' ? 'card-bad' : 'card-good'}>`;
    domString += `<h1>${dino.type}</h1>`;
    domString += `<h4>${dino.bio}</h4>`;
    if (dino.info === 'Carnivore') {
      domString += `<h4>Has some tasty snacks:</h4>`;
    } else {
      domString += `<h4>Has some tasty friends:</h4>`;
    }
    domString += `<div class='card-holder'>`;
    dino.snacks.forEach((cat) => {
      domString += `<div class='card'>`;
      domString += `<h5>${cat.name}</h5>`;
      domString += `<div class='card-img'>`;
      domString += `<img src ='${cat.imageUrl}'>`;
      domString += `</div>`;
      domString += `<p class='card-description'>${cat.specialSkill}</p>`;
      domString += `</div>`;
    });
    domString += `</div>`;
    domString += `</div>`;
    printToDom(domString);
    
};

const printToDom = (strang) => {
    outputDiv.append(strang);
};

module.exports = domString;