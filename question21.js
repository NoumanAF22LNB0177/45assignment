"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items
const bouquet = {
    name: "Spring Delight",
    price: 300,
    description: "Beautiful Arrangement of spring flowers"
};
// define an arry of objects
let bouquets = [];
// pushing multipul object
bouquets.push(bouquet);
bouquets.push({
    name: "Summer bliss",
    price: 350,
    description: "beautiful arrangement of Summer flower"
});
let bouquet3 = {
    name: "Red",
    price: 400,
    description: "Beautiful arrangement of red roses"
};
bouquets.push(bouquet3);
console.log(bouquets);
bouquets.push({ name: "freshness", price: 250, description: "A beautiful arrangement of white and yellow roses" });
//  console.log(bouquet);
//   function to dispaly bouquets
function dispalybouquets(bouquets) {
    for (let i of bouquets) {
        console.log(`
        title: ${i.name}
        description${i.description}
        price: ${i.price}
         ____________\n`);
    }
}
dispalybouquets(bouquets);
