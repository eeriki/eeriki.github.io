var imagem = document.querySelector('#imagens');

var imgs = ['imagens/emoboy.jpg', 'imagens/emoemoemo.jpg', 'imagens/felipometo.jpg', 'imagens/minionboy.jpg', 'imagens/minionemo.jpg']

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
