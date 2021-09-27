function money(valor){
    let valorAlterado = valor.toFixed(2)
valorAlterado = String(valorAlterado)
valorAlterado = valorAlterado.replace(".","," )
    const real = `R$ ${valorAlterado}`
    console.log(real)
}
money(0.30000000000000004)