const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais(){
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo= document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML=`você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${total_pessoas_conectados} estão conectadas em alguma rede sociale passam em media ${dados.tempo_medio} horas conectadas`
    console.log(paragrafo)

const container = document.getElementById('graficos-container')
container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()