let a = 200;

if (true) {
  let a = 10;
  const b = 20;
  //   console.log("Inner", a);
}
// console.log(a);
// console.log(b);

function one() {
  const userName = "mohan";
  function two() {
    const website = "youtube";
    console.log(userName);
  }
  // console.log(website);

  // two();
}

// one();

if (true) {
  const userName = "mohan";
  if (userName === "mohan") {
    const website = " instagram";
    // console.log(userName + website);
  }
}

//++++++++++++++++++++++++++++ Important ++++++++++++++++++++++++++++

console.log(addOne(7));

function addOne(num) {
  return num + 1;
}

// ReferenceError: Cannot access 'addTwo' before initialization
// addTwo(8);

const addTwo = function (num) {
  return num + 2;
};
