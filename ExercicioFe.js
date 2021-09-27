function  auxiliDivisao (dividendo, divisor){
    const resultado = dividendo / divisor
    const sobra = dividendo % divisor
    const obj = {valor: parseInt(resultado), sobra: sobra}
    return obj    
}
const defineNota = (valorSaque, nota) =>{
    const qtdNota = auxiliDivisao(valorSaque, nota)
    console.log(`Quantidade de Notas de ${nota} : ${qtdNota.valor} `)
    if (qtdNota.sobra == 0) return false
     return qtdNota.sobra 
}
function saque(x) {
    const arrayNotas = [100, 50, 20, 10, 5, 2, 1]
    arrayNotas.forEach((nota) => { x = defineNota(x, nota)})
}
saque(388)


