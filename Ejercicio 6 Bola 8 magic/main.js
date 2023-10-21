let numberBall = Math.floor(Math.random() * 8);
let respuestaBall = "";
let nameUser= "jesus";

console.log("==================================");
if(nameUser){
    console.log(`     Bienvenido al juego ${nameUser}`);
}
console.log("==================================");

switch(numberBall){
    case 0: console.log(`${nameUser},La bola te dice: Casi la pegas`) ;
    break;
    case 1:console.log(`${nameUser}, La bola te dice: Te estas acercando`) ;
    break;
    case 2:console.log(`${nameUser}, La bola te dice: Vas subiendo`) ;
    break;
    case 3:console.log(`${nameUser}, La bola te dice: Estás creciendo como espuma`);
    break;
    case 4:console.log(`${nameUser}, La bola te dice: Hoy es tu día de suerte`) ;
    break;
    case 5:console.log(`${nameUser}, La bola te dice: Estás pegandole al punto`) ;
    break;
    case 6:console.log(`${nameUser}, La bola te dice: Haz ganado el kino`) ;
    break;
    case 7:console.log(`${nameUser}, La bola te dice: Haz llegado al final, ahora paga tú.`) ;
    break;
    default: console.log(`${nameUser}, La bola te dice: Ganaste un ticket para ir al aeropuerto de LS`) ;
    break;
}