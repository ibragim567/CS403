// const students = ['Ibrahim', 'Aysu', 'Tural', '9', 0, true, undefined, 'Isa', 'Elmir', 'Ferhad', 'Ramil']

// 1.Loop values of students (for)

const students = ['Ibrahim', 'Aysu', 'Tural', '9', 0, true, undefined, 'Isa', 'Elmir', 'Ferhad', 'Ramil'];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}



// 2.Loop values of students (for_of)
for (const student of students) {
    console.log(student);
}




// 3.Loop only strings values of studens (for)

for (let i = 0; i < students.length; i++) {
    if (typeof students[i] === 'string') {
        console.log(students[i]);
    }
}




// 4.Loop only number values of studens (for_of)


for (const student of students) {
    if (typeof student === 'number') {
        console.log(student);
    }
}




// 5.Loop only true values of studens (for)

const numbers = [4, 7, 8, 12, 22, 9, 12]

for (let i = 0; i < students.length; i++) {
    if (students[i] ) {
        console.log(students[i]);
    }
}


// 6.Loop only even values of numbers (for)


const numberss = [4, 7, 8, 12, 22, 9, 12];
console.log(numberss[1])
for (let i = 0; i < numberss.length; i++) {
    if (numberss[i] % 2 === 0) {
        console.log(numberss[i]);
    }
}




// 7.Loop only odd values of numbers (for_of)

for (const number of numberss) {
    if (number % 2 !== 0) {
        console.log(number);
    }
}




// 8.Sum values of numbers (for)

let sum = 0;

for (let i = 0; i < numberss.length; i++) {
    sum += numberss[i];
}

console.log(sum);





// 9.Mult values of numbers (for_of)


let value = 1;

for (const number of numberss) {
    value *= number;
}

console.log(value);



// 10.Show all values except 12 (for/continue)

for (let i = 0; i < numberss.length; i++) {
    if (numberss[i] === 12) {
        continue;
    }
    console.log(numberss[i]);
}



// 11.Sum values of numbers (reduce)

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
        age: 13,
        gender: 'male'
    },
    {
        id: 5,
        name: 'Tural',
        age: 33,
        gender: 'male'
    },
    {
        id: 6,
        name: 'Ayxan',
        age: 25,
        gender: 'male'
    },
]

const totalSum = numberss.reduce((acc, curr) => acc + curr, 0);

console.log(totalSum);



// 12.Sum age of users (reduce)

const totalAge = users.reduce((acc, user) => acc + user.age, 0);

console.log(totalAge);




// 13.Mult age of users (reduce)

const userr = {
    id: 1,
    name: 'Elnur',
    surname: 'Elnurlu',
    age: 19
}

const totalName = users.reduce((acc, user) => acc * user.age, 1);

console.log(totalName);




// 14.Console keys of user(for_in)

const user = {
    id: 1,
    name: 'Elnur',
    surname: 'Elnurlu',
    age: 19
};

for (const key in user) {
    console.log(key);
}




// 15.Console values of user(for_in)

for (const key in user) {
    console.log(user[key]);
}



const userss = [
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
        age: 13,
        gender: 'male'
    },
    {
        id: 5,
        name: 'Tural',
        age: 33,
        gender: 'male'
    },
    {
        id: 6,
        name: 'Ayxan',
        age: 25,
        gender: 'male'
    },
]



const summ = users.reduce ((acc,user) => acc + user.age,0);
console.log(summ);