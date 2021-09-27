
function resultado(x, y, a){
    switch (a) {
        case "Soma":
            return x + y
            break
        case "Sub":
            return x - y
            break
        case "Mult":
            return x * y
            break
        case "Div":
           return x / y
    }
    
}

console.log(resultado(4, 5, "Soma"))
console.log(resultado(4, 5, "Sub"))
console.log(resultado(4, 5, "Mult"))
console.log(resultado(4, 5, "Div"))