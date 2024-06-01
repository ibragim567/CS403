const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];
// 1.Sum all the numbers in 'arr1'

let sum5 = 0;
arr1.map((item) => (sum5 += item));
console.log(sum5);

let result = arr1.reduce((num, sum) => (num += sum), 0);
console.log(result);

// 2.Add two numbers (10,88) to end of arr1 (push methods)

arr1.push(10, 88);
console.log(arr1);

for (let i = 0; i < 1; i++) {
  arr1.push(10, 88);
}
console.log(arr1);

// 3.Remove first two numbers from arr1

//Variant1(use shift)
arr1.shift();
arr1.shift();
console.log(arr1);

// Variant2(use slice method)
let newNumbers = arr1.slice(2);
console.log(newNumbers);

for (let i = 0; i < 2; i++) {
  arr1.shift();
}
console.log(arr1);

// 4.Add three numbers (0,9,11) in front of arr1(unshift)

arr1.unshift(0, 9, 11);
console.log(arr1);

for (let i = 0; i < 1; i++) {
  arr1.unshift(0, 9, 11);
}
console.log(arr1);

// 5.Remove four numbers in front of arr1(shift)

//Variant1(for loop)
for (let i = 0; i < 4; i++) {
  arr1.shift();
}

console.log(arr1);

//Variant2(not very good)
arr1.shift();
arr1.shift();
arr1.shift();
arr1.shift();
console.log(arr1);

////////////// TASK 7 //////////////
const arr25 = [
  "Murad",
  "Anar",
  "Rufet",
  "Anar",
  "Gulshen",
  "Nermin",
  "Ilkin",
  "Fuad",
  "Anar",
];
// 1.Console values from "Rufet" to "Fuad"

//Variant1(the easiest option)
console.log(arr25.slice(2, 8));

//Variant2(use indexOf)
const startIndex = arr25.indexOf("Rufet");
const endIndex = arr25.indexOf("Fuad");

const array = arr25.slice(startIndex, endIndex + 1);
console.log(array);

//Variant3(use only slice method)
const startIndexx = arr25.slice("Rufet");
const endIndexx = arr25.slice("Fuad");

const array2 = arr25.slice(startIndexx, endIndexx + 1);
console.log(array);

//Variant4(use loop)
const startIndexxx = arr25.indexOf("Rufet");
const endIndexxx = arr25.indexOf("Fuad");

for (let i = startIndexxx; i <= endIndexxx; i++) {
  console.log(arr25[i]);
}

// 2.Change Gulshen to Rovshen

const arr256 = [
  "Murad",
  "Anar",
  "Rufet",
  "Anar",
  "Gulshen",
  "Nermin",
  "Ilkin",
  "Fuad",
  "Anar",
];

//Variant1(map+replace)
const newArr25 = arr256.map((item) => item.replace("Gulshen", " Rovshen"));

console.log(newArr25);

//Variant2(for loop)
{
  for (let i = 0; i < arr256.length; i++) {
    if (arr256[i] == "Gulshen") {
      arr256[i] = "Rovshen";
    } else {
      continue;
    }
  }
  console.log(arr256);
}

// 3.Console each name with map

//Variant1(map)
const newArr = arr256.map((item) => item);
console.log(newArr);

//Variant2(for loop)
for (let i = 0; i < arr256.length; i++) {
  console.log(arr256[i]);
}

// 4.Console only names which is Anar

//Variant1(map)
const anarElements = arr256.filter((item) => item === "Anar");
console.log(anarElements);

//Variant2(for loop)
for (let i = 0; i < arr256.length; i++) {
  if (arr256[i] === "Anar") {
    console.log(arr256[i]);
  }
}
console.log(arr256);
// 5.Console all names where name is Anar, then change it to "Perviz"

//Variant1(map)
const anarElements5 = arr256.map((item) => (item === "Anar" ? "Perviz" : item));
console.log(anarElements5);

//variant2(for loop)
for (let i = 0; i < arr256.length; i++) {
  if (arr256[i] === "Anar") {
    arr256[i] = "Perviz";
  }
}

console.log(arr256);

// 6.Console last second value of arr2

const arr2567 = [
  "Murad",
  "Anar",
  "Rufet",
  "Anar",
  "Gulshen",
  "Nermin",
  "Ilkin",
  "Fuad",
  "Anar",
];
const lastSecond = arr2567[arr2567.length - 2];
console.log(lastSecond);

// 7.Console length of arr2

const arr25678 = [
  "Murad",
  "Anar",
  "Rufet",
  "Anar",
  "Gulshen",
  "Nermin",
  "Ilkin",
  "Fuad",
  "Anar",
];
const length = arr25678.length;
console.log(arr25678);
console.log(length);

////////////// TASK 8 //////////////
const arr3 = [
  "9",
  10,
  100,
  11,
  "true",
  "undefined",
  true,
  null,
  "something",
  false,
];
// 1.Show only numbers

//Variant1(filter)
const onlyNumber1 = arr3.filter((item) => typeof item === "number");
console.log(onlyNumber1);

//Variant2(for loop)

for (let i = 0; i < arr3.length; i++) {
  if (typeof arr3[i] === "number") {
    console.log(arr3[i]);
  }
}

// 2.Show only true values

//Variant1(filter)
const onlyNumber2 = arr3.filter((item) => item === true);
console.log(onlyNumber2);

//variant2(for loop)
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i]) {
    console.log(arr3[i]);
  }
}

// 3.Show only false values

//Variant1(filter)
const onlyNumber3 = arr3.filter((item) => item === false);
console.log(onlyNumber3);

//Variant2(for loop)
for (let i = 0; i < arr3.length; i++) {
  if (!arr3[i]) {
    console.log(arr3[i]);
  }
}

// 4.Show only strings

//Variant1(filter)
const onlyNumber4 = arr3.filter((item) => typeof item === "string");
console.log(onlyNumber4);

//Variant2(for loop)

for (let i = 0; i < arr3.length; i++) {
  if (typeof arr3[i] === "string") {
    console.log(arr3[i]);
  }
}

////////////// TASK 8 //////////////
const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25];

// 1.Console (only even numbers)

//Variant1(filter)
console.log(numbers.filter((item) => item % 2 === 0));

//Variant2(for loop)
for (i = 0; i < numbers.length; i++)
  if (numbers[i] % 2 == 0) console.log(numbers[i]);

// 2.Console (only odd numbers)

//Variant1(filter)
console.log(numbers.filter((item) => item % 2 === 1));

//Variant2(for loop)
for (i = 0; i < numbers.length; i++)
  if (numbers[i] % 2 == 1) console.log(numbers[i]);

////////////// TASK 9 //////////////
const arr4 = [
  10,
  "29",
  10,
  100,
  11,
  "true",
  false,
  "undefined",
  true,
  null,
  "something",
  false,
];

// 1.Console all values of arr4 -

//Variant1(map)
console.log(arr4);

console.log(arr4.map((item) => item + " - it is  " + typeof item));

//Variant2(for loop)
for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}

// 2.Sum all numbers of arr4

//Variant1(filter)
let sum = 0;
let num = arr4.filter((num) => typeof num === "number");
num.filter((value) => (sum += value));
console.log(num, sum);

//Variant2(for loop)
let summ = 0;
for (let i = 0; i < arr4.length; i++)
  if (typeof arr4[i] === "number") summ += arr4[i];
console.log(summ);

// 3.Count only the values that are true

//Variant1(filter)
const trueCount = arr4.filter((value) => value === true).length;
console.log(trueCount);


//Variant2(for loop)
for(i = 0; i < arr4.length; i ++) 
    if (arr4[i])
        console.log(arr4[i]);
// 4.Count only the values that are string

//Variant1(filter)
const stringCount = arr4.filter((value) => typeof value === "string").length;
console.log(stringCount);

//Variant2(for loop)
for(i = 0; i < arr4.length; i ++) 
    if (typeof arr4[i] === "string")
        console.log(arr4[i]);



// 5.Count only the values that are false

//Variant1(filter)
const falseCount = arr4.filter((value) => value === false).length;
console.log(falseCount);

//Variant2(for loop)
for(i = 0; i < arr4.length; i ++) 
    if (!arr4[i])
        console.log(arr4[i]);


////////////// TASK 10 //////////////
// 1.Create a object add your name, surname, age and city.
const user1 = {
  firstName: "Ibrahim",
  lastName: "Almemmedov",
  age: 22,
  city: "Baku",
};

console.log(user1);

// 2.Then change name to "John"

user1.firstName = "John";

console.log(user1);

const obj = {
  email: "ulfat@gmail.com",
  info: {
    gender: "Male",
    loc: {
      city: "Baku",
      street: "Nizami 22",
      education: {
        "uni name": "ADNSU",
      },
    },
  },
};

// 3.Console gender

console.log(obj.info.gender);

// 4.Console city

console.log(obj.info.loc.city);

////////////// TASK 11 //////////////

// let fullName = 'Ulfat Zakirli Rovshen'
let fullName = "Ibrahim Almemmedov Aydin";

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)

//Variant1(split)
console.log(fullName.split(" "));


//Variant2(function)
function getValue(firstName, lastName, fatherName) {
    return `${firstName} ${lastName} ${fatherName}`
 }
 
 console.log(getValue("Ibrahim", "Almemmedov", "Aydin"));

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin


//Variant1(split)
let namePart = fullName.split(" ");
let fullName1 = [namePart[1], namePart[0], namePart[2]].join(" ");
console.log(fullName1);



//Variant2(function)
function getValue(firstName, lastName, fatherName) {
    return `${lastName} ${firstName} ${fatherName}`
 }
 
 console.log(getValue("Ibrahim", "Almemmedov", "Aydin"));





// 3) Alinan yeni arrayi stringe cevirin(join)

//Variant1(join)
const newArray1 = ["Almemmedov", "Ibrahim", "Aydin"];
const newString = newArray1.join(" ");

console.log(newString);


//Variant2(function)
{
    function getValue(firstName, lastName, fatherName) {
        return [lastName, firstName, fatherName];
    }
    const newArray = getValue("Ibrahim", "Almemmedov", "Aydin")
    console.log(newArray.join(' '));
}




let arr = [
  4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
  5, 6, 3, 7, 3, 7,
];

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

//Variant1(we see the quantity)
const fiveCount = arr.filter((num) => num === 5);
console.log(fiveCount);

//Variant2
const fiveCounts = arr.filter((num) => num === 5).length;
console.log(fiveCounts);




//Variant3
{
    function getValue(anyArr){
        sum = 0
        for(i = 0; i < anyArr.length; i ++){
            sum += anyArr[i]
        }
        console.log(sum);
    }
    getValue(arr)
}



//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

//variant1
let sum3 = 0;
arr.map((arr) => (sum3 += arr));
console.log(sum3);


//Variant2
{
    function getValue(anyArr){
        sum = 0
        for(i = 0; i < anyArr.length; i ++){
            sum += anyArr[i]
        }
        console.log(sum);
    }
    getValue(arr)
}




//6) arrayda tekrar olunan reqemleri artan sira ile duzun

//Variant1
arr.sort((a, b) => a - b)
console.log(arr);




//Variant2
{
    function getValue(anyArr){
        let acc = anyArr.sort((a, b) => a - b)
        console.log(acc);
    }
    getValue(arr)
}




//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)

//Variant1
let Max = Math.max(...arr);

let quantity = arr.filter((quantity) => quantity === Max);

console.log(quantity.length, quantity);


//Variant2
{
    function getValue(anyArr) {
        let max = Math.max(...anyArr)
        count = 0
        for(i = 0; i < anyArr.length; i++){
            if(anyArr[i] == max){
                count ++
            }
        }
        console.log(count);
    }
    getValue(arr)
}



//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)

//Variant
let nameLength = "Ibrahim".length
console.log(arr.includes(nameLength));


//Variant1
const name = "Ibrahim";
const length1 = name.length;
const Included = arr.includes(length1);
console.log(Included);

//Variant2
const myName = "Ibrahim".length;
const Includedd = arr.includes(myName);
console.log(Includedd);



function include(arr, name) {
  const nameLength = name.length;
  let included = false;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === nameLength) {
          included = true;
          break;
      }
  }

  return included;
}

const myNamee = "Ibrahim";
const includedd = include(arr, myName);

console.log(includedd);






//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

//Variant1
const index = arr.findIndex((arrs) => arrs % 3 === 2);
console.log(index);



//Variant2
{
    function getValue(anyArr){
        for(let i = 0; i < anyArr.length; i ++){
            if(anyArr[i] % 3 == 2 && anyArr[i] > 2){
                console.log(anyArr[i], i);
                break
            }
        }
    }
    getValue(arr)
}




// const index1 = arr.filter(arrs => arrs % 3 === 2 );
// const newMethod = index1.findIndex(arrs => arrs % 3 === 2);
// console.log(index1);
// console.log(newMethod);

//10) arraydaki en boyuk reqemin ilk indexini tapin

//Variant1
const arr7 = Math.max(...arr);
console.log(arr7);

const arr8 = arr.findIndex((item) => item === arr7);
console.log(arr8);

//Variant2
// const arr7 = Math.max(...arr)
// const maxIndex = arr.findIndex(item => item == arr7)
// console.log(arr7);
// console.log(maxIndex);


//Variant3
{
  function getValue(anyArr){
      let max = Math.max(...anyArr)
      for(let i = 0; i < anyArr.length; i ++){
          if(anyArr[i] == max){
              console.log(anyArr[i], i);
              break
          }
      }
  }
  getValue(arr)
}








//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

//Variant1(with forEach)
let fourArray = [];

arr.forEach((four, index) => {
  if (four === 4) {
    fourArray.push(index);
  }
});

console.log(fourArray);

//Variant2
{
  function getValue(anyArr){
      for(let i = 0; i < anyArr.length; i ++){
          if(anyArr[i] == 4){
              console.log(anyArr[i], i);
          }
      }
  }
  getValue(arr)
}



//Variant3(with map and filter)
const fourArray1 = arr
  .map((num, index) => (num === 4 ? index : null))
  .filter((index) => index !== null);

console.log(fourArray1);

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin


//Variant1
let firstIndex = arr.indexOf(5);
let lastIndex = arr.lastIndexOf(5);
console.log(firstIndex, lastIndex);


//Variant2
{
  function getValue(anyArr, myNum){
      let firstIndex = arr.indexOf(myNum)
      let lastIndex = arr.lastIndexOf(myNum)
      return {firstIndex, lastIndex}
  }
  console.log(getValue(arr, 5))
}




//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin


//Variant1
let newArrr = arr.filter((num) => num > 2);
let difference = arr.length - newArr.length;

console.log(newArrr);
console.log(difference);

//Variant2
{
  function getValue(anyArr){
      let newArray = []
      for(let i = 0; i < anyArr.length; i ++){
          if(anyArr[i] > 2){
              newArray.push(anyArr[i])
          }
      }
      let diff = anyArr.length - newArray.length;
      return (diff, newArray)
  }
  console.log(getValue(arr))
}



//14) 7 reqeminin indexleri cemini tapin.

//Variant1
let sumIndexes = arr.reduce((sum, num, index) => {
  if (num === 7) {
    return sum + index;
  }
  return sum;
}, 0);

console.log(sumIndexes);

//Variant2
let sumIndexess = arr.reduce(
  (sum, num, index) => (num === 7 ? sum + index : sum),
  0
);

console.log(sumIndexess);


//Variant3
{
  function getValue(anyArr, num) {
      let sum = 0;
      for (let i = 0; i < anyArr.length; i++) {
          if (anyArr[i] == num) {
              sum += i
          }
      }
      return sum
  }
  console.log(getValue(arr, 7));
}




///////////// TASK 12//////////////

let arr2 = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin


//Variant1
let newArray = arr2.filter((item) => item.name.startsWith("t"));
console.log(newArray);



//Variant2
{
  const getValue = (anyArr) => {
      let newArray = []
      for(let i = 0; i < anyArr.length; i ++)
          if(anyArr[i].name.startsWith('t')){
              newArray.push(anyArr[i])
          }
      return newArray
  }
  console.log(getValue(arr2));
}




// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin


//Variant1
let nameIT = arr2.filter(
  (item) => item.name.startsWith("t") && item.name.endsWith("t")
);
console.log(nameIT);



//Variant2
{
  const getValue = (anyArr) => {
      let count = 0
      for (let i = 0; i < anyArr.length; i++) {
          if(anyArr[i].name.startsWith('t') && anyArr[i].name.endsWith('t')){
              count ++
          }
      }
      return count
  }
  console.log(getValue(arr2))
}



// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin


//Variant1
let newTASK = 0;
nameIT.filter((neww) => (newTASK += neww.key));
console.log(newTASK);

//Variant2
{
  const getValue = (anyArr) => {
      let sum = 0
      for (let i = 0; i < anyArr.length; i++) {
          if(anyArr[i].name.startsWith('t') && anyArr[i].name.endsWith('t')){
              sum += anyArr[i].key
          }
      }
      return sum
  }
  console.log(getValue(arr2))
}






// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.


//Variant1
arr2
  .filter((item) => item.name.endsWith("e"))
  .forEach((obj) => (obj.name = "SuperDev"));

console.log(arr2);



//Variant2
{
    const getValue = (anyArr) => {
        for (let i = 0; i < anyArr.length; i++) {
            if(anyArr[i].name.endsWith('e')){
                anyArr[i].name = 'SuperDev'
            }
        }
        return anyArr
    }
    console.log(getValue(arr2));
}


// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin


//Variant1
const key = arr2.find(
  (item) => item.name.length === Math.max(...arr2.map((obj) => obj.name.length))
).key;

console.log(key);



//Variant2
{
  const getValue = (anyArr) => {
      let maxKey
      let max = 0
      for(let i = 0; i < anyArr.length; i ++){
      let names = anyArr[i].name.length
      if (names > max) {
          max = names
          maxKey = anyArr[i].key
        }
      }
     return maxKey
  }
  console.log(getValue(arr2));
}




// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin


//Variant1
const indexx = arr2.findIndex(
  (item) => item.name.length === Math.max(...arr2.map((obj) => obj.name.length))
);
const index2 = indexx ** 2;
console.log(indexx);



//Variant2
{
  const getValue = (anyArr) => {
      let longIndex = 0
      let maxLength = 0
      for (let i = 0; i < anyArr.length; i++) {
          const nameLength = anyArr[i].name.length
          if (nameLength > maxLength) {
              maxLength = nameLength
              longIndex = i
          }
      }
      
      return longIndex ** 2
  }
  
  console.log(getValue(arr2));
  
}





// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.


//Variant1
const name4 = arr2.filter((item) => item.name.length === 4);
console.log(name4);



//Variant2
{
  const getValue = (anyArr) => {
      let newArray = []
      for (let i = 0; i < anyArr.length; i++) {
          if (anyArr[i].name.length == 4) {
              newArray.push(anyArr[i])
          }
      }
      return newArray
  }
  console.log(getValue(arr2));
}






// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

//Variant1(reduce)
const object = arr2.reduce((bigObject, myObj) =>
  myObj.key > bigObject.key ? myObj : bigObject
);
console.log(object);

//Variant2(with sort(a,b)
const maxObject = arr2.sort((a, b) => b.key - a.key)[0];

console.log(maxObject);

//Variant3(with sort(b,a)
const maxObjects = arr2.sort((b, a) => a.key - b.key)[0];

console.log(maxObjects);

//19 cu suali komitte almaq lazimdir, yoxsa sehv tapacaq


//Variant4
{
  const getValue = (anyArr) => {
      let maxKey = anyArr[0].key
      let maxName = anyArr[0].name
      for (let i = 1; i < anyArr.length; i++) {
          if (anyArr[i].key > maxKey) {
              maxKey = anyArr[i].key
              maxName = anyArr[i].name
          }
      }
      return maxName
  }
  console.log(getValue(arr2));
}




// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.


//Variant1
const letter = arr2
  .filter((item) => item.name.split("l").length - 1 === 2)
  .map((item) => arr2.indexOf(item));
console.log(letter);


//Variant2
{
  const getValue = (anyArr) => {
      let newArray = []
      for (let i = 0; i < anyArr.length; i++) {
          const name = anyArr[i].name
          if (name.indexOf('l') !== -1 && name.lastIndexOf('l') !== name.indexOf('l')) {
              newArray.push(i);
          }
      }
      return newArray
  }
  console.log(getValue(arr2));
     
}







// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.


//Variant1
const letter1 = arr2
  .filter((item) => item.name.split("t").length - 1 === 2)
  .map((item) => arr2.indexOf(item));
console.log(letter1);





//Variant2
{
  const getValue = (anyArr) => {
      let newArray = []
      for (let i = 0; i < anyArr.length; i++) {
          const name = anyArr[i].name
          const countT = (name.match(/t/g) || []).length;
          if (countT == 2) {
              newArray.push(anyArr[i].key)
          }
      }
      return newArray
  }
  console.log(getValue(arr2));
}

