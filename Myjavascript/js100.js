// var car = {
//     name: 'Fiat',
//     model: 500,
//     weight: '850kg',
//     color: 'white',
//     start: function() {
//         alert(this.name + ' Engine started');
//     }
// }

// car.cc = 2000;

// alert(car.cc);


// var products = {};
// products.name = 'Box';
// products.price = 100;
// products.amount = 6;
// products.color = "blue";
// products.total = function() {
//     return this.price * this.amount
// }

//alert("Total price is " + products.total());

// var employee = new Object();
// employee.id = 100;
// employee.name = 'Jane Drinkmilk';
// employee.salary = 50000;

// document.write(`Id: ${employee.id} Name: ${employee.name} 
//  Salary: ${employee.salary}`);

// function emp(id, name, sa) {
//     this.id = id;
//     this.name = name;
//     this.salary = sa
// }

// employee1 = new emp(101, "John Drinkwater", 100000);
// employee2 = new emp(102, "Jane Drinkmilk", 50000);
// employee3 = new emp(103, "Jone Drincoffee", 60000);

// document.write(employee1.id + '<br>');
// document.write(employee1.name + "<br>");
// document.write(employee1.salary + "<br>");

// var ary = ['Toyota', 'Honda', 'Nissan'];
// ary.push('Masda'); //Add a new item to an array
// alert(ary);
// ary.pop('Toyota'); //Remove the last element of an array
// alert(ary);

// var num = [1, 2, 4, 5, 6]
// let numten = num.map((n) => {
//     return n * 10;
// })
// alert(numten);

// function timeTen(n) {
//     return n * 10;
// }

// alert(num.map(timeTen));

// var ages = [32, 33, 16, 40];

// function checkAdults(age) {
//     return age >= 18
// }
// document.write(ages.filter(checkAdults));

// var ages = [32, 33, 16, 40, 20];
// let adults = ages.filter(function(a) {
//     return a >= 18
// })
// document.write(adults);

// var ages = [32, 33, 16, 40, 20, 18];
// let adults = ages.filter((a) => a >= 18)
// document.write(adults);

// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(function(element) {return element > 130});
// alert(found);

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));


// var sum = 0;
// var numbers = [65, 44, 12, 4];

// function myFunction(item) {
//     return item;
// }
// alert(numbers.forEach(myFunction));


// numbers.forEach(e => (sum += e));

// alert(sum);





// const array = [1, 2, 3, 4, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // expected output: true


// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// alert(array1.every(isBelowThreshold));


// expected output: true



// var ages = [32, 33, 16, 40];

// function checkAdult(age) {
//     return age >= 18;
// }

// alert(ages.every(checkAdult));


// var sum = 0;
// var numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
//   document.getElementById("demo").innerHTML = sum;
// }


// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15


// const ary = [1, 2, 3, 4];

// function sum(i, j) { return i += j }

// document.write(ary.reduce(sum, 0));
// document.write('<br>');
// document.write(ary.reduce(sum, 5));





// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // expected output: true

// console.log(pets.includes('at'));
// // expected output: false