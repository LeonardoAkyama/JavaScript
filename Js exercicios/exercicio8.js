function vogais(palavras) {
    const vogal = "aeiou";
    let cont = 0


    for (let i of palavras) {
        if (vogal.includes(i)) {
            cont++
        }
    }
    return cont
}

console.log(vogais("javascript"))