let Portakal1 = {
  productName: "Portakal",
  quantity: 2,
  unitPrice: 10,
};

let products = [
  {
    productName: "Nar",
    quantity: 1,
    unitPrice: 5,
  },
  {
    productName: "Greyfurt",
    quantity: 3,
    unitPrice: 8,
  },
  {
    productName: "Kivi",
    quantity: 2,
    unitPrice: 20,
  },
];
let show = () => {
  let [a1, k1, i1, [cities]] = [
    { name: "Akdeniz", population: "20M" },
    { name: "Karadeniz", population: "30M" },
    { name: "İç Anadolu", population: "15M" },
    [["Antalya", "Mersin"], [("Samsun", "Sinop")], [("Ankara", "Kayseri")]],
  ];
  console.log(a1, k1, i1, "ve şehirler " + cities);
};

function addToCart(productName = "", quantity = "1") {
  console.log(quantity + " adet " + productName + " sepete eklendi.");
}

let addToCart2 = (product) => {
  console.log(
    product.quantity +
      " kg " +
      product.productName +
      " kilosu " +
      product.unitPrice +
      " tl den sepete eklendi."
  );
};

let sayHello = (name) => {
  console.log("Hello " + name);
};

let addToCart3 = (products) => {
  console.log(products);
};

let max = (...numbers) => {
  console.log("Max is " + Math.max(...numbers));
};
sayHello("Hasan");
addToCart("Elma", 10);
addToCart("Muz");
addToCart2(Portakal1);
addToCart3(products);
max(1, 6, 800, 101);
show();
