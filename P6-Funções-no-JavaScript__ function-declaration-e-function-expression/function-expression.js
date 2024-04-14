const essaPalavraEUMPalindromo = function(palavra) { // Palindromo = quando você inverte a palavra e o resultado é o mesmo.
    const chars = palavra.split('');
    let charsReverso = chars.reverse();
    charsReverso = charsReverso.join('');

    let negativo = (palavra == charsReverso ? `` : ` não`);
    console.log(`A palavra ${palavra}${negativo} é um palindromo!`);
}
essaPalavraEUMPalindromo('radar'); // function (Arrow Function) // funciona so depois da declaração.
