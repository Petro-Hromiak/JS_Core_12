'use strict'

// Task 1 forEach

let arr1 = [5, 6, 7, 8, 9];
let sumary = 0;
arr1.forEach(value1 => sumary += value1)
console.log(sumary)

// Task 2 Map

let arr2 = [5, 6, 7, 8, 9];
let sgr = arr2.map(sgrArr => sgrArr * sgrArr)
console.log(sgr)

// Task 3 Every
let arr3 = [
    { name: 'Ivan', country: 'Ukraine' },
    { name: 'Petro', country: 'Ukraine' },
    { name: 'Miguel', country: 'Cuba' }
]
const checkEvery = arr3.every(value => value.country.toLowerCase() === `ukraine`)
console.log(checkEvery)

// Task 4 Some

let arr4 = [
    { name: 'Ivan', country: 'Ukraine' },
    { name: 'Petro', country: 'Ukraine' },
    { name: 'Miguel', country: 'Cuba' }

]
const checkSome = arr4.some(value => value.country.toLowerCase() === `cuba`)
console.log(checkSome)

// Task 5 Filter 
let arr5 = [1, 'string', [3, 4], 5, [6, 7]]
let arrArr = arr5.filter(masive => typeof masive == `object`);
console.log(arrArr)


// Task 6 Reduce

let arr61 = [1, 2, 5, 0, 4, 5, 6];
let notReduce = false

let sum = arr61.reduce((total, elem) => {
    if (elem === 0) {
        notReduce = true
    }
    return notReduce ? total : total + elem
})
console.log(sum)


let arr62 = [1, 2, 5, 0, 4, 5, 6];
let sumElem = 0;
const total10 = arr62.reduce((total, elem) => {
    if (total <= 10) {
        sumElem++;
    }
    return total += elem;
}, 0)
console.log(sumElem)



// Task 7
let arr = [1, -2, 3, 0, 4, -5, 6, -11];
let newArr = [...arr.filter(value => value > 0).map(value => Math.sqrt(value))]
console.log(newArr)








