
### Exercicio JS 3

```    const notas = [10,10,10]

function calculaNota(notas) {
    const media = calcularMedia(notas)

    if (media > 0 && media <= 6) {
        return 'D'
    } else if (media > 6 && media <= 7.5) {
        return 'C'
    } else if (media > 7.5 && media <= 9) {
        return 'B'
    } else if (media <= 100) {
        return 'A'
    }
}

function calcularMedia(notas) {
    let soma = 0
    for (let nota of notas) {
        soma += nota
    }
    const media = soma / (notas.length)
    return media
}
console.log(calculaNota(notas)) ```
