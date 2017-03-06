// Line 1: a f

var a = 0;

// Line 2: a f

function f(c) {

  // Line 3 a f c b g

  var b = 1;

  // Line 4 a f c b g

  function g(d) {
    
    // Line 5 a f c a b g d e 

    var e = 4;
   
    // Line 6 a f c a b g d e

  }
  
  // Line 7 a f c b g

  return g;

  // Line 8 a f c b g

}

// Line 9 a f

f(2)(3);

// Line 10 a f