function narcissistic(value) {
    // Separar os digitos em um array
    var arrayDigitos = Array.from(value.toString())

    // map => vai fazer a potenciação de cada elemento do array
    // reduce => vai fazer a soma desses elementos
    var respostaFinal = arrayDigitos.map((digito) => {
        return Math.pow(digito, arrayDigitos.length)
    }).reduce((total,digito) => {
        return total + digito
    }, 0)


    return (value == respostaFinal)
}


narcissistic(153);