const nome = "Edson Martin Feitosa"

const partesNome = nome.toLowerCase().split(" ");

const cont1 = partesNome[0];
const cont2 = partesNome[partesNome.length -1];

const email = `${cont1}.${cont2}@facens.br`;
console.log(email);