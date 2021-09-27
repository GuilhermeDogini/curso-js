class resultado {
    constructor(x, y){
        this.x = x
        this.y = y
    
    }

    Soma(){
        return this.x + this.y 
    }
    Sub(){
        return this.x - this.y
    }
    Mult(){
        return this.x * this.y 
    }
    Div(){
        return this.x / this.y
    }
}

const valor = new resultado(4, 5)

console.log(valor.Soma())
console.log(valor.Sub())
console.log(valor.Mult())
console.log(valor.Div())

const valor1 = new resultado(6, 9)

console.log(valor1.Soma())
console.log(valor1.Sub())
console.log(valor1.Mult())
console.log(valor1.Div())