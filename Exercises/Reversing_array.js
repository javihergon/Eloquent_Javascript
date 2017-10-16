function reverseArray(array) {
  var newArray = [];
  // for(var i = array.length - 1; i >= 0; i--) {
  // 		newArray.push(array[i]);
  for(var i = 0; i < array.length; i++) {
  		newArray.unshift(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
      var j = array.length - 1;
      for(var i = 0; i < array.length / 2; i++) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            j = j - 1;
      }
   return array;
}
  
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]