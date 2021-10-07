function squareDigits(num){
    var resposta = num.toString()
                    .split('')
                    .map(elem => elem * elem)
                    .join('')
    
    return parseInt(resposta)
    
  }

  squareDigits(9119)