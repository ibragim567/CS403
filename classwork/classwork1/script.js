const user = {
    'first-name': 'Ibrahim',
    lastName: 'Almemmedov',
    age: 22,
    info: {
        address: 'Novxani',
        city: 'Baku',
        country: 'Azerbaijan',
    },
    edu: {
        uni: 'ADPU',
        point: '700',
    },
    work: {
        company: 'Gilan Knauf',
        experience: '5 years',
    },

}
// console.log(user);
// console.log(user.info);
// console.log(user.edu);
// console.log(user.work);
// console.log(user["first-name"]);




// const user1=user // shallow copy
// const user1= { ...user } // deep copy
const user1= JSON.parse(JSON.stringify(user))
console.log(user1);



// delete user.info.address
// delete user.info.city
// delete user.info.country

// console.log(user);


