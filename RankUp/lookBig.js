function narcissistic(value) {
    // Code me to return true or false
    var str_digitos = value.toString();
    var qtd_digitos = str_digitos.length;
    var array_digitos = str_digitos.split('')


    var array_digitos_convertidos = []
    for(var i = 0; i < array_digitos.length; i++) {
        array_digitos_convertidos.push( parseInt(array_digitos[i]))
    }
    
    var array_digitos_expoente = []
    for(var j = 0; j < array_digitos_convertidos.length; j++) {
        var aux = Math.pow(array_digitos_convertidos[j], qtd_digitos)
        array_digitos_expoente.push(aux)
    }
    
    var total = array_digitos_expoente.reduce(function(total, digito){
        return total + digito;
    }, 0);

    var respostaFinal = total == value

    if(respostaFinal) return true
    else return false
}


narcissistic(7);