let image = document.querySelector('#image')
const list = ["imagens/imagem-viado/viado1.jpg","imagens/imagem-viado/viado2.jpg","imagens/imagem-viado/viado3.jpg","imagens/imagem-viado/viado4.jpg","imagens/imagem-viado/viado5.jpg"]

const botaoDireito = document.querySelector('#direito')
const botaoEsquerdo = document.querySelector('#esquerdo')

let index = 0

botaoDireito.addEventListener('click', () => {
    index++
    if(index > 4){
        index = 0
    }
    console.log(index)
    image.src = list[index]
})

botaoEsquerdo.addEventListener('click', () => {
    index--
    if(index < 0){
        index = 4
    }
    console.log(index)
    image.src = list[index]
})