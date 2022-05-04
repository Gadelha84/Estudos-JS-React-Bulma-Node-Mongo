let velocity = 160;
let deceleration = 20;

function slowDown(velocity, deceleration) {
    while (velocity > 0) {
        velocity -= deceleration;
        console.log("Velocidade atual: " + velocity + "km/s");
    }
}
slowDown(velocity, deceleration);
console.log("Desembarque liberado.");