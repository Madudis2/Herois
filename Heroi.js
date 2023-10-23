let NomeHeroi = "José"
let Quantxp = 10001
nivel = ""

if (Quantxp <= 1000) {
    nivel = "Ferro"
} else if (Quantxp <= 2000) {
    nivel = "Bronze"
} else if (Quantxp <= 5000) {
    nivel = "Prata"
} else if (Quantxp <= 7000) {
    nivel = "Ouro"
} else if (Quantxp <= 8000) {
    nivel = "Platina"
} else if (Quantxp <= 9000) {
    nivel = "Ascendente"
} else if (Quantxp <= 10000) {
    nivel = "Imortal"
} else if (Quantxp > 10000) {
    nivel = "Radiante"
}

console.log("O Herói de nome ", NomeHeroi, " está no nível de ", nivel)
