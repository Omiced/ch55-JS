//== operador de comparacion basico
console.log(1 == 1);
console.log(1.1 + 0.2 == 1.3);
console.log("1" == 1);
console.log(NaN == NaN);
console.log([] == []);
//=== operador de comparacion estricta , compara el valor y el tipo dato, recomendado siempre usar este.
console.log("1" === 1);
console.log(NaN === NaN);

//>= <=
console.log(3 <= 3);
console.log(4 < 4);
console.log(4 >= 4);
console.log(4 > 5);

//?? evalua solo null y undefined como false
console.log(0 ?? 2);
console.log(null ?? 0);
console.log(undefined ?? 2);
console.log("" ?? 2);

//!= !==
console.log("1" != 1);
console.log("1" !== 1);
