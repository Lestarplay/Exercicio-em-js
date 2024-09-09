let preço = parseFloat(prompt("Digite o preço do produto: "))
let desconto = parseFloat(prompt("Digite o desconto do produto: "))
let novoValor = preço - (desconto/100*preço)
alert("O novo preço corresponde a: R$ " + novoValor)
if (novoValor>90) {
    alert("Compra pode ser dividida em 3 vezes")
}