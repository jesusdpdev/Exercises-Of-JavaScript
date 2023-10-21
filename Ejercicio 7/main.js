//Utilice la .length propiedad para encontrar el último elemento de una matriz.

const arr = ['Liverpool','Barcelona','Real Madrid','1860 Munich','Deportivo Táchira'];


//usar indexOf y lenght a la vez.

const newArr = (arrfinally) => {
        console.log(arrfinally[arrfinally.length - 1])
}

console.log(newArr(arr));