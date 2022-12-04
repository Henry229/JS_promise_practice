let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let value of data) {
  for (let item of data) {
    console.log(` ${value} * ${item} = ${value * item}`);
  }
}

const products = [
  {
    name1: 'chair',
    price1: 7000,
  },
  {
    name2: 'sofa',
    price: 5000,
  },
  {
    name1: 'desk',
    price3: 9000,
  },
];

let newValue;
let newKey;

for (let item of products) {
  for (let key in item) {
    if (isNaN(parseInt(key.slice(-1))) == false) {
      newValue = item[key];
      newKey = key.slice(0, -1);
      item[newKey] = newValue;
      delete item[key];
    }
  }
}
console.log(products);

function fizzBuzz(start, end) {
  console.log(start, end);
  for (let i = start; i < end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
      return true;
    } else if (i % 3 === 0) {
      console.log('fizz');
      // continue;
    } else if (i % 5 === 0) {
      console.log('buzz');
      // continue;
    } else {
      console.log(i);
    }
  }
  return false;
}

fizzBuzz(1, 10);

const breakWhenPrivate = (array) => {
  for (item of array) {
    if (item === 'PRIVATE') {
      break;
    }
    console.log(item);
  }
};

breakWhenPrivate(['cat', 'dog', 'PRIVATE', 'fish', 'elephant']);

let obj = {
  a: ['1', '2', '3', '4'],
  b: ['5', '6'],
  c: ['7', '8', '9'],
  d: ['10', '11', '9'],
};

function continueWhenSmall(obj) {
  for (key in obj) {
    console.log('obj[key]', key, '/', obj[key]);
    if (obj[key].length < 3) {
      continue;
    }
    for (element of obj[key]) {
      console.log('element :', element, '/', obj[key]);
      if (element > 9) {
        break;
      }
      console.log(element);
    }
  }
}
continueWhenSmall(obj);

const addTwo = (a, b) => {
  return a + b;
};

const subtractTwo = (a, b) => {
  return a - b;
};

const divideTwo = (a, b) => {
  return a / b;
};

const multiplyTwo = (a, b) => {
  return a * b;
};

const calculate = (a, b, func) => {
  switch (func) {
    case 'addTwo':
      return addTwo(a, b);
    case 'subtractTwo':
      return subtractTwo(a, b);
    case 'divideTwo':
      return divideTwo(a, b);
    case 'multiplyTwo':
      return multiplyTwo(a, b);
    default:
      throw 'invalid func ';
  }
};

calculate(5, 10, 'multiplyTwo');

function addSuffix(suffix) {
  return function (string) {
    return string + suffix;
  };
}

const addSuper = addSuffix(', that is super');
const addMmkay = addSuffix(', mmkay');

console.log(addSuffix(', that is super'));
console.log(addSuffix(', mmkay'));
