String.prototype.toJadenCase = function () {
    //...

    var arrayPalavras = this.split(' ')
        .map((palavra) => {
            return palavra[0].toUpperCase() + palavra.slice(1)
        })
        .join(' ')
};

"How can mirrors be real if our eyes aren't real".toJadenCase()