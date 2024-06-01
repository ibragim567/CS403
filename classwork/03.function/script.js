const arr = [4, 5, 6, 7, 8]
const arr2 = [12, 55, 32, 90, 100]

//1. calcMult of arrays in function

function calcMult(anyArr) {
    let sum = 1
    anyArr.map(item => sum *= item);
   return sum
}

console.log(calcMult(arr));
console.log(calcMult(arr2));




//2. get only odd values 

function oddValue(arr) {
    const odd = arr.filter((num) => num % 2 === 1);
    return odd;
}

console.log(oddValue(arr))




//3. get only even values

function evenValue(arr2) {
    const even = arr.filter((num) => num % 2 === 0);
    return even;
}


console.log(evenValue(arr2))

//4. write function that return name of users

const users = [
    {
        id: 1,
        name: 'Isa',
        age: 19,
        gender: 'male'
    },
    {
        id: 2,
        name: 'Aysu',
        age: 20,
        gender: 'female'
    },
    {
        id: 4,
        name: 'Ramil',
        age: 30,
        gender: 'male'
    },
]

function returnUsers(users) {
const user = users.map((user) => user.name )
    return user
}
console.log(returnUsers(users));


// 5.write function that return gender of users



function returnGenders(users) {
const gender = users.map((user) => user.gender) 
    return gender
}
console.log(returnGenders(users))




// 6.write function that return age of users

function returnUsers(users) {
    const age = users.map((user) => user.age )
        return age
    }
    console.log(returnUsers(users));
    




// 7.write function that return only male of users


function returnUsers(users) {
    const user = users.map((user) => user.gender == 'male' )
        return user
    }
    console.log(returnUsers(users));
    



// 8.write function that return users whose age is greater than 20 

function returnUsers(users) {
    const user = users.map((user) => user.age >= 20 )
        return user
    }
    console.log(returnUsers(users));



// 9.write function that take firstName,lastName,age as parametr then call and
//  give these values to function(age can be empty,give default value)


function getUser(firstName, lastName, age) {
    return `${firstName}  ${lastName}  ${age}`
}

console.log(getUser('Ibrahim', 'Almemmedov', 20));
console.log(getUser('Aygun', 'Almemmedova'));
console.log(getUser('Ibrahim', 'Almemmedov'));


