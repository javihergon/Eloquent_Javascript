function range(start, end, increment) {
  var numbers = [];	
  if (increment === undefined) {
  		increment = 1;
  }
  if (increment < 0){
  	for(var i = start; i >= end; i = i + increment ) {    		
    		numbers.push(i);
    }
  } else {
    for(var i = start; i <= end; i = i + increment ) {    		
    		numbers.push(i);
    }
  }
  return numbers;
}
function sum(numbers) {
 		 return numbers.reduce(function(start, next) {
         		return start + next;
         });
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55