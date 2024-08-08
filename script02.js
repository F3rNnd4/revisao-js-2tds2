// Receba um número e repetir em caracteres de acordo com um número pedido

let intensidade = 12;
let palmas = "";

for (let i = 1; i < intensidade; i++) {
    palmas += "👏";
    if (i % 5 === 0) {
        palmas += "🎉";
    }
}

console.log(palmas);