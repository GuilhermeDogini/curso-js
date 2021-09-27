function tringulo(x, y, z){
    const Equilátero = x === y && y === z && x === z
    const Isósceles = x === y && y !== z && x !==z
    const Escaleno = x !== y && y !== z && x !== z
    if (Equilátero === true){
        console.log("O triangulo é Equilátero")
    } else if (Isósceles === true){
        console.log("O triangulo é Isósceles")
    } else {
        console.log("O triangulo é Escaleno")
    }
    return [Equilátero, Isósceles, Escaleno]
}
 
console.log(tringulo(5, 5, 7))