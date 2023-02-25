// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
array = [
    {
    estado: 'SP',
    valor: 67836.43
    },
    {
    estado: 'RJ',
    valor: 36678.66
    },
    {
    estado: 'MG',
    valor: 29229.88
    },
    {
    estado: 'ES',
    valor: 27165.48
    },
    {
    estado: 'Outros',
    valor: 19849.53
    }
]
let valorTotal = 0
for (let i = 0; i < array.length; i++) {
    valorTotal = valorTotal + array[i].valor
}

for (let i = 0; i < array.length; i++) {
    let percentual = (array[i].valor / valorTotal * 100)
    let estado = array[i].estado
    console.log(`${estado} corresponde a ${percentual.toFixed(2)}% do valor total mensal da distribuidora`)
}