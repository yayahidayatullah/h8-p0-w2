function bandingkanAngka( angka1 , angka2 ) {
  var hasil = '';
  if( angka2 > angka1 ){
    hasil = true
  }else if ( angka2 < angka1 ) {
    hasil = false
  }else{
    hasil = -1
  }
  return hasil
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
