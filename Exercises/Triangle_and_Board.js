var numberSymbol = '';
var num = 7;
  for(var i = 0; i < num; i++) {
    numberSymbol += '#';
  console.log(numberSymbol);
  }

//-----------------------------------------------

var size = 8;
var board = '';
for(var i = 0; i < size; i++) {
  for(var j = 0; j < size; j++) {
       if((i + j) % 2 === 0) {     //first element second line wourl be i+j 
         board += ' ';              // each time it's even starts with a space
        } else {
         board += '#';              // each time it's odd starts with a #
        }
    }
    board = board + "\n";         // adds a line break
  }
  console.log(board); 