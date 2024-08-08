let armas = ["Senbon", "Kunai", "Lança-Chama", "Nunchaku", "Katana"];

let ataques = [];

ataques.push("Jiro");
ataques.push(armas[3]);
ataques.push(armas[4]);
ataques.push(armas[1]);
ataques.push(armas[0]);

// console.log("Nome do robô: " + ataques[0]);

for(let i = 0; i < ataques.length; i++) {
    if (i == 0) {
        console.log(`Nome do Robô: ${ataques[i]}`);
    } else {
        console.log(`Ataque ${i}: ${ataques[i]}`);
    }
}


