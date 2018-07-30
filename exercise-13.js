function xo(str) {
  var hasilX = 0;
  var hasilO = 0;
  for (var x = str.length-1 ; x >= 0 ; x-- ){
    if(str.charAt(x) === 'x'){
      hasilX += 1;
    }else if(str.charAt(x) === 'o'){
      hasilO += 1;
    }
  }  
  if( hasilX === hasilO ){
    return true
  }else{
    return false
  }
}
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
