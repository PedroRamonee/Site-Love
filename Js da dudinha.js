const img = document.querySelector('img')
const text = document.querySelector('p')
const h2 = document.querySelector('h2')
img.addEventListener('click', changeImg)
var num, sum = 'y'
num = 1
function changeImg() {
    if (num < 17) {
      num++    
      
        if(num == 2){
            text.innerHTML = 'Eu só queria dizer que eu te amo demais e que você é a pessoa que eu mais amei em toda minha vida'
            h2.innerHTML = ' ENTÃO'
        }
        if(num == 3){
            text.innerHTML = 'Perdão por todas as minhas falhas e erros, eu sou muito imperfeito (diferente de vc que é perfeita a todo instante)'
            h2.innerHTML = ' DESCULPA'

        }
        if  (num == 4) {
            text.innerHTML = 'Pra finalizar eu queria deixar claro que voce é unica mulher que eu tenho vontade de ficar perto, de dormir junto, de beijar e de passar todos os dias da minha vida do lado, você é o amor da minha vida'
            h2.innerHTML = ' ENCERRANDO'
        }
        if (num == 5){
            text.innerHTML = 'Agora vai ser uma coletania de fotos juntas nossa em que eu estou muito feliz, pq eu sou muito feliz ao seu lado'
            h2.innerHTML = ' IMAGENS'

        }
        if (num >= 6 && num <= 17) {
            text.innerHTML = 'Você me faz sentir o homem mais feliz e sortudo do mundo, obrigado por estar ao meu lado'
            h2.innerHTML = ' VOCÊ É TUDO PRA MIM'
        }

    } else {
        num = 1
        text.innerHTML = 'Isso daqui é so uma forma de demonstrar meu amor por você'
        h2.innerHTML = ' EU TE AMO DEMAIS'
    }
    img.src = `eu e duda ${num}.jpg`
}