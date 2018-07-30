function konversiMenit( menit ) {
  var jam = Math.trunc( menit / 60)
  var tangkapMenit = '';
  if( menit % 60 > 9 ) {
    tangkapMenit = menit % 60
  }else{
    ( tangkapMenit = '0' + menit % 60 )
  }  
  return jam + ':' + tangkapMenit  
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
