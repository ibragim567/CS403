////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result:

//Variant 1
let n = 12
let m = 8
console.log(n * m) //96

//Variant 2
let result = 12 * 8
console.log(result); //96


// 2.Divide 10 by 2 add result to variables x, and console x:

let x = 10 / 2
console.log(x); //5

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.


let num1 = 20
let num2 = 17
console.log(num1 + num2); //37



/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
//then add them to varibale name (info) and console info. */

let name = "Ibrahim"
let surname = "Almemmedov"
let birthday = "23.04.2023"
let fullInfo = `Name:${name} 
Surname:${surname} 
Birthday:${birthday}`
console.log(fullInfo);



// 5.Console the remainder(%) when 17 is divided by 12.

//Variant 1
let firstnumber = 17
let secondnumber = 12
console.log(firstnumber % secondnumber); //5

//Variant 2
console.log(17 % 12) //5


// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence,console result.
{

    let cityName = "Baku"
    console.log(cityName);
}

{

    let cityName = "Gence"
    console.log(cityName);
}

////// TASK 2 //////////////

let a = 1, b = 1;
let c = ++a;
let d = b++;

console.log(c); //2
console.log(d); //1
console.log(b); //2



////////////// TASK 3 //////////////

let ab = 2;
let xy = 1 + (ab *= 2);
console.log(xy); //5


////////////// TASK 4 //////////////

console.log('test1', test); //undefined
{
    let test = "something"
    console.log('test2', test); //something
}
console.log('test3', test);  //undefined


console.log('test4', test);  //undefined
{
    var test = "something"
    console.log('test5', test); //something
}
console.log('test6', test); //something


////////////// TASK 5 //////////////

//Find the type of all the following cases

let namee = "Ulfat"
console.log(typeof namee); //string 

let surnamee = "Zakirli"
console.log(typeof surnamee); //string

let year = 2000
console.log(typeof year); //number

year = "2000"
console.log(typeof year) //string

let city;
console.log(typeof city); //undefined

let qualification = null
console.log(typeof qualification); //object

let obj = { name: 'ulfat' }
console.log(typeof obj); //object

let arr = ['a', 'b', 'c']
console.log(typeof arr); //object

