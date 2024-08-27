
//belajar js

//callback function dan method method milik array

//callback 1
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// angka.forEach(function (n) {
//   console.log(n * n);
// });

// //callback dua
// const angkaGenap = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// function print(element) {
//   console.log(element);
// }

// angkaGenap.forEach(print);

//callback tiga
const angkaDiBagiDua = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

angkaDiBagiDua.forEach(function (diBagiDua) {
  if (diBagiDua % 2 === 0) {
    console.log(diBagiDua);
  }
});
