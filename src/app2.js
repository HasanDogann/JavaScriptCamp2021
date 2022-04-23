//let parametre atarken kullanılacak
let x = 10;
x = "Hasan DOĞAN";
let students = { id: 1, name: "Hasan" };
console.log(students);

function save(students, score = 100) {
  console.log(students.name + score);
}

save(students);

let teachers = ["Engin Demiroğ", "Baran Büyük"];
console.log(teachers);
let teachers2 = [teachers, { id: 2, name: "Huso", students }];
console.log(teachers2);
