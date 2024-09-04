// function having function and an array as input parameter. 
// function map(f, a) {
//   const result = new Array(a.length);
//   for (let i = 0; i < a.length; i++) {
//     result[i] = f(a[i]);
//   }
//   return result;
// }
// const cube = function (x) {
//   return x * x * x;
// };
// const numbers = [0, 1, 2, 5, 10];
// console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]


// map method in Array
// let arr = [
//   {
//     "fname":"avi", "lname":"kumar", "age":"24",
//   },
//   {
//     "fname":"ananya", "lname":"kumari", "age":"20",
//   },
//   {
//     "fname":"avigyan",  "lname":"kushwaha", "age":"29",
//   }
// ];
// let res = arr.map(show);
// function show(x){
//   console.log(x.fname ," " ,x.lname," ",x.age);  
// }



//function declaration
// function sqr(x){
//   return x*x;
// }
// console.log("the square of a num is:",sqr(3));

// function assignment is of two type
// named function assignment
// const res = function cube(x){
//   return x*x*x;
// }
// console.log("the cube of a num is:",res(5));

// anonymous or unnamed function  assignment
// const ans = function(x){
//   return x+x;
// }
// console.log("the ans is " , ans(5));

// special object function named arguments.
// function repAdd(a,b){
//   console.log(typeof(arguments));
//   let total=0;
//   for (let value of arguments){
//       total = total+value;
//     }
//    return total

// }
// console.log("total Multiplication is :",repAdd(1,2,3,4,5,6,7,15));


// special operator in function name as rest parameter represented by (...).

// function repAdd(a,...args){
// Here type of args is Array .
//   console.log(args);
//   let total=0;  
//   for (let value of args){
//       total = total+value;
//     }
//    return total;

// }
// console.log("total Multiplication is :",repAdd(1,2,3,4,5,6,7,15));

// reverse a no 
// function rev(x){
//   let ans=0;
//   while(x>0){
//      ans = (ans*10)+x%10;
//      x=x%10;
     
//     }
//     return ans;
// }
// let a=rev(124)
// console.log(a);


// object having getter and setter function.

// let person = {
//   fname : "Avi",
//   lname : 'jha',
//   get fullName(){
//     return `${person.fname}  ${person.lname}`;
//   },
//   set fullName(value){
//     let parts = value.split(' ');
//     this.fname =parts[0];
//     this.lname = parts[1];
    
//   }
  
// }
// person.fullName ="rishu jha";
//  console.log(person.fullName);


 // hoisting with getter and setter
 
console.log(x)
console.log(sum(5,10));

const x=20;
function sum(a,b)
{
  return a+b;
}

















