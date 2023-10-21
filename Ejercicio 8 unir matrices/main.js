//Toma todos los elementos de una matriz y forma una cadena.

const arr1 = ['Hello'];
const arr2 = ['World'];

const newArr = (arrOne,arrTwo) => {
    const arr3 = arrOne.concat(arrTwo);
    return arr3;
}

console.log(newArr(arr1,arr2));