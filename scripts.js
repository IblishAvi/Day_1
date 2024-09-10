// function having function and an array as input parameter. 
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
const cube = function (x) {
  return x * x * x;
};
const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]


// map method in Array
let arr = [
  {
    "fname":"avi", "lname":"kumar", "age":"24",
  },
  {
    "fname":"ananya", "lname":"kumari", "age":"20",
  },
  {
    "fname":"avigyan",  "lname":"kushwaha", "age":"29",
  }
];
let res = arr.map(show);
function show(x){
  console.log(x.fname ," " ,x.lname," ",x.age);  
}



//function declaration
function sqr(x){
  return x*x;
}
console.log("the square of a num is:",sqr(3));

function assignment is of two type
named function assignment
const res = function cube(x){
  return x*x*x;
}
console.log("the cube of a num is:",res(5));

// anonymous or unnamed function  assignment
const ans = function(x){
  return x+x;
}
console.log("the ans is " , ans(5));

// special object function named arguments.
function repAdd(a,b){
  console.log(typeof(arguments));
  let total=0;
  for (let value of arguments){
      total = total+value;
    }
   return total

}
// console.log("total Multiplication is :",repAdd(1,2,3,4,5,6,7,15));


// special operator in function name as rest parameter represented by (...).

function repAdd(a,...args){
Here type of args is Array .
  console.log(args);
  let total=0;  
  for (let value of args){
      total = total+value;
    }
   return total;

}
console.log("total Multiplication is :",repAdd(1,2,3,4,5,6,7,15));




// object having getter and setter function.

let person = {
  fname : "Avi",
  lname : 'jha',
  get fullName(){
    return `${person.fname}  ${person.lname}`;
  },
  set fullName(value){
    let parts = value.split(' ');
    this.fname =parts[0];
    this.lname = parts[1];
    
  }
  
}
person.fullName ="rishu jha";
 console.log(person.fullName);


 // hoisting 
 
console.log(x)
console.log(sum(5,10));

const x=20;
function sum(a,b)
{
  return a+b;
}

// passing object as parameter in function

function myfunc(objfunc){
  objfunc.make = 'samsung';
}

const mob ={
 make : 'Motorola',
 model: 'g8S01',
 price: '15K'
}

console.log(mob.make)
myfunc(mob);
console.log(mob.make);

// passing arr as parameter in function

function myfunc(Arr){
  Arr[0] = 20;
}

const arr =[5]

console.log(arr[0])
myfunc(arr);
console.log(arr[0]);


//Binary search

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(val) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === val) {
            return arr[mid];
        } else if (arr[mid] < val) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return "Value not found";
}

console.log(binarySearch(6)); // Output: 6
console.log(binarySearch(3)); // Output: 3
console.log(binarySearch(4)); // Output: 4
console.log(binarySearch(10)); // Output: Value not found

// Use strict mode is used here to prevent the reallocation of value.
function add(num1 ,num2){
    "use strict"
    num1=100;
    num2= 200;
    return arguments[0]+arguments[1];
  }
  console.log("value",add(10,20));//Expected value:30
  









