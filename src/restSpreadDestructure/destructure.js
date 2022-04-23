//Destruring

let populations = [10000, 20000, 30000, [40000, 100000]];
let [low, medium, high, [veryhigh, maximum]] = populations;
console.log(veryhigh);

function someFunction([small1]) {
  console.log(small1);
}
someFunction(populations);

let category = {
  id: 1,
  name: "Drink",
};
console.log(category.id);
console.log(category["name"]);

let { id, name } = category;
console.log(id);
