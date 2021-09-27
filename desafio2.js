function calculo(b, a, c){
    const delta = (b * b) - (4 * a * c) 
    if (delta <= 0) return false
    const x1 = (-b + Math.sqrt(delta)) / 2 * a
    const x2 = (-b - Math.sqrt(delta)) / 2 * a
    return [x1.toFixed(2), x2.toFixed(2)]
}

 console.log(calculo(-98, 5, 8))
