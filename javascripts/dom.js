"use strict";

let outputDiv = $("#dinosaur");

const domString = (dinosaur) => {
    let printString = `<div>
                        <h1>${dinosaur.name}</h1>
                       </div`;
    printToDom(printString);
};

const printToDom = (strang) => {
    outputDiv.append(strang);
};

module.exports = domString;