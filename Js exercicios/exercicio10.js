function verificar(palavra){

    const i = palavra.split("").reverse().join("");
    return palavra === i;
}

console.log(verificar("arara"))
console.log(verificar("ovo"))
console.log(verificar("frango"))