function mountains () {
  var result = '';
  var ground = function (x) {
    
    for (var i = 0; i < x ; i++) {
      result += '_';
    }

  };
  var elevation = function (x) {
    result += '/';
    
    for(i = 0; i < x ; i++) {
      result += "^";
    }

  result += '\\';
  };
  
  ground(3);
  elevation(4);
  ground(6);
  elevation(1);
  ground(1);
  return result;
}

console.log(mountains());
