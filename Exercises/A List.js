// A LIST

var list = { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } };

function arrayToList(array) {
  var list = {};
  if(array.length === 0){
    return null;
  } else {
    list.value = array.shift();
    list.rest = arrayToList(array);
  }
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));