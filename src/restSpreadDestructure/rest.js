//rest
//rest parametreleri array alır fakat çağırırken array içinde değil direk yazarız array içide yazarsak array içinde array olur
let showProducts = function (id, ...products) {
  console.log(id);
  console.log(products);
};

showProducts(10, "ELma", "Armut");
