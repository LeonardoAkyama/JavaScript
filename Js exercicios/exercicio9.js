function email(texto) {
    const parte = texto.split("@")

    if (parte.length !== 2) {
        return false;
    }
    const cont = parte[1];

    if (!cont.includes(".")) {
        return false;
    }
    return true;
}

console.log(email("edson.feitosa@facens.br"))
console.log(email("edson.feitosa@@facens.br"))

