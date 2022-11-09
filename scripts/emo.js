var imagem = document.querySelector('#imagens');

var imgs = ['imagens/emoboy.jpg', 'imagens/emoemoemo.jpg', 'imagens/felipometo.jpg', 'imagens/minionboy.jpg', 'imagens/minionemo.jpg']

const imgViado = ['imagens/imagem-viado/viado1', 'imagens/imagem-viado/viado2', 'imagens/imagem-viado/viado3', 'imagens/imagem-viado/viado4', 'imagens/imagem-viado/viado5']

var bots = document.querySelectorAll('.botao')
function clicar(){
    bots.forEach((bott, index) => {
            bott.classList.remove('active')
            this.classList.add('active')
            if(bott.classList.contains('active'))
            {
                imagem.src = imgs[index]
            }
    })
}

bots.forEach((bott) => {
    bott.addEventListener('click', clicar)
})

const inputFile = document.querySelector('.picture-input')
inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target
   const file = inputTarget.files[0]
   if(file){
    const reader = new FileReader()

    reader.addEventListener('load', function(e){
        const readerTarget = e.target

        imagem.src = readerTarget.result
    })

    reader.readAsDataURL(file)
   } else{
    imagem.alt = 'Arquivo não reconhecido'
   } 
})

