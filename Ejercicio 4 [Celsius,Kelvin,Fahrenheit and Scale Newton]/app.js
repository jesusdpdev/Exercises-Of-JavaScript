//Variable que define temperatura Kelvin
    let Kelvin = 0;
//Variable que define la temperatura celsius con formula
    let celsius = 273 - Kelvin;
//Variable que define la temperatura a fahrenheit
    let fahrenheit = celsius * (9/5) + 32;
//Utilizando el metodo floor de math para redondear hacia abajo la temperatura fahrenheit
    fahrenheit = Math.floor(fahrenheit);
//Celsius a la escala de newton
    let newton = celsius * (33/100);
//Redondear hacia abajo los celsius a la escala newton
    newton = Math.floor(newton);

//Salidas de consola
    console.log(`The temperature is ${fahrenheit} degress Fahrenheit`)
    console.log(`The temperature is ${newton} scale newton`)