// console.log('array');

// let a = 'Ibrahim'
// let b = ['Ibrahim', 'Almemmedov']

// console.log(a.length);
// console.log(b.length);



let user = 'Ibrahim'
//let user2 = 'Ibrahim Almemmedov'


// console.log(user2.toLowerCase('I','i'))
// console.log(user.replace('I', 'i'));
// console.log(user.toUppperCase().slice(0,1) + user.slice(1))
// console.log(user2.toUpperCase().slice(0))

// let user2 = 'Ibrahim Almemmedov'
// console.log(user2.slice(0,6).replace('u','U') + user2.slice(6).replace('z','Z'))


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']



// let userr = 'Ibrahim Almemmedov'
// console.log(userr.slice(7).replace('b','B'))


// slice()
// slice(start)
// slice(start, end)


// let text = 'code academy cs403 baku'
// console.log(text.split(' ').join(' '));


// const students = ['ibrahim', 'Aysu', 'Tural', 'Ayxan', 'Elshen', 'Ruslan', 'Elnur', 'Isa', 'Elmir', 'Farhad', 'Ramil']


const cars = [
    {
        carName: 'Bmw',
        year: 2000,
        engine: 4400,

    },

    {
        carName: 'Bmw',
        year: 2024,
        engine: 4000,
    },

    {
        carName: 'Audi',
        year: 2022,
        engine: 5000,
    },

    {
        carName: 'Lambo',
        year: 2024,
        engine: 6200,
    }
]

// Tasks
// 1.console only age
// 2.console only gender
// 3.console only name

// 4.filter age that is equal and greater than 20 
// 5.filter only female
// 6.filter name which starts 'R'
// 7.filter name which includes 'a'
// 8.filter age which is odd
// 9.filter age which is even
// 10.console indexs

// 11.console only even indexs
// 12.Sum all students' age
// 13.Sum all indexs
// 14.Multiple only Female age


console.log(cars);

console.log(cars.map((cars) => cars.engine));

console.log(cars.map((cars) => cars.carName));

console.log(cars.map((cars) => cars.year));


console.log(cars.map((cars, index) => cars.engine === 6200));

console.log(cars.filter((car) => car.engine >= 4000));

console.log(cars.filter((car) => car.carName.startsWith('L')));

console.log(cars.filter((car) => car.carName.includes('a')));

console.log(cars.filter((car) => car.year % 2 == 0));

console.log(cars.filter((car) => car.year % 2 == 1));

console.log(cars.map((item, index) => 'cars:' + index));

console.log(cars.map((item, index) => 'cars:' + index % 2 !== 0));

console.log(cars.map((car) => car.engine += car.engine));

let sumIndex = 0
cars.filter((car, index) => sumIndex += index)
console.log('sumIndex: ', sumIndex);


let multi = 1
let car = cars.filter((myCar) => myCar.carName == 'Bmw')
let newCar = car.map((newCar) => multi *= newCar.year)
console.log(multi);
