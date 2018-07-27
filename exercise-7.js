// 1. Menyusun Barisan Bintang
console.log('\n1. Menyusun Barisan Bintang\n')
var rows1 = 5;// input the number of rows
// do loops to display asterisks in the console.
for (rows1;rows1 >= 1 ; rows1--) {
  console.log('*')
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('\n2. Menyusun Barisan Bintang Dengan Nested Looping\n')
var rows2 = 5; // input the number of rows
var hasil  = ''; //untuk menyimpan nilai perulangan
// do loops to display asterisks in the console.
for (var col2 = 1 ; col2 <= rows2 ; col2++) {
  for (var bintang = 1 ; bintang <= rows2 ; bintang++) {
    hasil += '*';
  }
hasil += '\n';  
}
console.log(hasil)

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping\n')
var rows3 = 5 ; // input the number of rows
var hasil2 = '';
// do loops to display asterisks in the console.
for (var col3 = 1 ; col3 <= rows3 ; col3++) {
  for (var bintang2 = 1 ; bintang2 <= col3 ; bintang2++) {
    hasil2 += '*';
  }
  hasil2 += '\n';
}
console.log(hasil2)