let lodash = require("lodash");

// let foo = lodash.round(4.006, 2);
// console.log(foo);
// let name = "Steve";
// console.log(name);
// name = lodash.upperFirst(name);
// console.log(name);

const fixCase = (caps) => {
  result = caps.toLowerCase();
  result = lodash.upperFirst(result);
  return result;
};

let message = "These pretzels are making me thirsty";
console.log(fixCase(message));

// ALL letters lowercase
console.log(lodash.lowerCase(message));

// ALL letters capitalized
console.log(lodash.upperCase(message));

// first letter is capitalized
// in JS" input[0].toUpperCase() + input.substring(1).toLowerCase()";
console.log(lodash.startCase(message));
