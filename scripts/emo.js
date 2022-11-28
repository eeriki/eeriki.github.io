var imagem = document.querySelector('#emos')
const list = ['/emoboy.jpg', '/emoemoemo.jpg', '/felipometo.jpg', '/minionboy.jpg', '/minionemo.jpg']
var entrada = document.querySelector('.archive')

const botList = document.querySelectorAll('.butts')

function ativar(){
    botList.forEach((item, index)=>{
        item.classList.remove("active")
        this.classList.add("active")
        if(item.classList.contains('active')){
            
            
             if(index == 5){
                entrada.addEventListener('change', (e)=>{
                    const input = e.target
                    const arqui = input.files[0]
                    if(arqui){
                        const leitor = new FileReader()
                        leitor.addEventListener('load', (e)=>{
                            const arquivo_lido = e.target
                
                            imagem.src = arquivo_lido.result
                        })
                        leitor.readAsDataURL(arqui)
                    }
                })
            }else{
                imagem.src = '/imagens' + list[index]
            }
        }
    })
}

botList.forEach((item)=>{
    item.addEventListener('click', ativar)
})


