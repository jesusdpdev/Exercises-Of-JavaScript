//Mi edad actualmente
const myAge = 17;
    let earlyYears = 2;
        earlyYears*=10.5;
            let laterYears = myAge-2;
//Calcular la cantidad de años de perro contabilizados por mis años porteriores
    laterYears*=4;
//Mostrar resultados de edad
    console.log(earlyYears,laterYears)
//Variable para ver mi edad y la del perro
    let myAgeInDogYears = earlyYears + laterYears;
//Variable para mostrar mi nombre todo en miniscula gracias al metodo toLocaleLowerCase
        let myName = "Jesus".toLocaleLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`)