// enriquecendo o array
meus_objetos.forEach(
    (ele) => {
        ele.caminho = `numero_${ele.valor}.jpg`;
    }
);

// referências
const body = document.getElementsByTagName('body')[0];

// criando elementos
const div_cartoes = document.createElement('div');
div_cartoes.id = 'div_cartoes';

const input_busca = document.createElement('input');
input_busca.type = 'text';

const div_detalhe = document.createElement('div');
div_detalhe.id = 'detalhe';

body.appendChild(input_busca);
body.appendChild(div_cartoes);
body.appendChild(div_detalhe);


const manipula_click = (evento) => {
    const clicada = evento.target;
    criar_cartao(clicada, div_detalhe);
}

const criar_cartao = (entrada, alvo) => {
    const container = document.createElement('div');
    const imagem = document.createElement('img');
    const legenda = document.createElement('h5');

    imagem.src = entrada.src;
    imagem.style.width = '150px';

    legenda.innerHTML = entrada.alt;

    container.style.border = '1px black solid';
    container.style.width = 'fit-content';
    container.style.textAlign = 'center';
    container.style.margin = '0 auto';

    container.appendChild(imagem);
    container.appendChild(legenda);

    alvo.innerHTML = '';
    alvo.appendChild(container);
}

const monta_imagens = (vetor, alvo) => {
    alvo.innerHTML = '';
    for (const obj of vetor){
        const img = document.createElement('img');
        img.src = `imagens/${obj.caminho}`;
        img.alt = obj.descri;
        img.onclick = manipula_click;
        img.onmouseover = (e) => {e.target.style.width = '150px'};
        img.onmouseleave = (e) => {e.target.style.width = '100px'};
        img.width = 100;
        alvo.appendChild(img);
    }
}

monta_imagens(meus_objetos, div_cartoes);

input_busca.onkeyup = (evento) => {
    const valor = evento.target.value;
    const novo_vetor = meus_objetos.filter( (e) => e.descri.includes(valor));
    monta_imagens(novo_vetor, div_cartoes);
}
