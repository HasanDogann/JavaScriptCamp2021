console.log("Hasan d");

let dollarYesterday = 9.2;
let dollarToday = 9.1;
const text = document.getElementById("parag");
const links = document.getElementById("hd");
const list = document.getElementById("list");
let konutKredileri = [
  "Ev kredisi",
  "Emlak Konut",
  "Varyap Kredisi",
  "Özel Konut Kredileri",
];
//For döngüsü ile liste oluşturma
for (let i = 0; i < konutKredileri.length; i++) {
  list.innerHTML += "<li class='bg-dark'>" + konutKredileri[i] + "</li>";
}
//Dolar kontrolü ile html içeriği değiştirme
function dolar() {
  if (dollarToday > dollarYesterday) {
    text.innerHTML = " Dolar baya arttı ha";
    text.classList.add = "bg-danger";
    text.class = links.innerHTML = "Yurtdışında iş bul ";
    links.href = "https://www.glassdoor.com";
    links.target = "_blank";
    links.hasan = "new1";
  } else if (dollarToday < dollarYesterday) {
    text.innerHTML = " Dolar azaldı ,çok ilginç";
    text.classList.add = "bg-danger";
    links.innerHTML = "Yurtdışında iş bul ama acil değil ";
    links.href = "https://www.indeed.com";
    links.target = "_blank";
    links.hasan = "new2";
  } else {
    text.innerHTML = " Dolar sabit, iyi bari";
  }
}

dolar();
