essaPalavraEUMPalindromo(); // function normal (Hoisting)

function essaPalavraEUMPalindromo () { // Palindromo = quando você inverte a palavra e o resultado é o mesmo.
    const palavra = 'rever';
    const chars = palavra.split('');
    let charsReverso = chars.reverse();
    charsReverso = charsReverso.join('');

    let negativo = (palavra == charsReverso ? `` : ` não`);
    console.log(`A palavra ${palavra}${negativo} é um palindromo!`);
}
