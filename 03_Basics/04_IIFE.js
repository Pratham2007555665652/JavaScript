// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  //named IIFE
  console.log("DB CONNECTED");
})();
//; to end a function context

((name) => {
  //unnamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})("mohan");
