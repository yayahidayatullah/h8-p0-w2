// 1. Melakukan Looping Menggunakan While
console.log('--1. Melakukan Looping Menggunakan While--')

console.log('LOOPING PERTAMA');
var looping1 = 2;
while (looping1 <= 20) {
  console.log( looping1 + " - I love coding");
  looping1 = looping1 + 2;
}

console.log('LOOPING KEDUA');
var looping1 = 20;
while (looping1 >= 2) {
  console.log( looping1 + " - I will become fullstack developer");
  looping1 = looping1 - 2;
}
//2. Melakukan Looping Menggunakan For 
console.log('\n--2. Melakukan Looping Menggunakan For --')

console.log('LOOPING PERTAMA');
for (var looping2 = 1 ; looping2 <=20 ; looping2++) {
  console.log( looping2 + ' - I love coding')
}
console.log('LOOPING KEDUA');
for (var looping2 = 20 ; looping2 >=1 ; looping2--) {
  console.log( looping2 + ' - I will become fullstack developer')
}
// 3. Angka Ganjil dan Genap
console.log('\n--3. Angka Ganjil dan Genap --')
for (var angka = 1 ; angka <= 100 ; angka++) {
  if(angka % 2 === 0 ){
    console.log('GENAP')
  }else{
    console.log('GANJIL')
  }
}
// perulangan 1
console.log('\n--perulangan dengan pertambahan 2--')
for (var perulangan = 1 ; perulangan <= 100 ; perulangan = perulangan + 2) {
  if(perulangan % 3 == 0) {
    console.log(perulangan + ' KELIPATAN 3 -' + ' pertambahan 2 ')
  }
}
console.log('\n--perulangan dengan pertambahan 5--')
for (var perulangan = 1 ; perulangan <= 100 ; perulangan = perulangan + 5) {
  if(perulangan % 6 == 0) {
    console.log(perulangan + ' KELIPATAN 6 -' + ' pertambahan 5 ')
  }
}
console.log('\n--perulangan dengan pertambahan 9--')
for (var perulangan = 1 ; perulangan <= 100 ; perulangan = perulangan + 9) {
  if(perulangan % 10 == 0) {
    console.log(perulangan + ' KELIPATAN 10 -' + ' pertambahan 9 ')
  }
}
