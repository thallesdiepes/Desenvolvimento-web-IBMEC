// enriquecendo o array
meus_objetos.forEach(
    (ele) => {
        ele.caminho = `imagens/numero_${ele.valor}.jpg`;
    }
);

const body = document.querySelector('body');

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find((e) => e.startsWith(chave));
    return procurado.split('=')[1];
}

const chave_escolhida = acha_cookie('valor');

const obj = meus_objetos.find((e) => e.valor == chave_escolhida);

const criar_cartao = (entrada, alvo) => {
    const container = document.createElement('div');
    const imagem = document.createElement('img');
    const legenda = document.createElement('h5');
    const nome = document.createElement('h4');

    nome.innerHTML = entrada.nome;

    imagem.src = entrada.caminho;
    imagem.style.width = '150px';

    legenda.innerHTML = entrada.descri;

    container.style.border = '1px black solid';
    container.style.width = 'fit-content';
    container.style.textAlign = 'center';
    container.style.margin = '0 auto';

    container.appendChild(nome);
    container.appendChild(imagem);
    container.appendChild(legenda);

    alvo.innerHTML = '';
    alvo.appendChild(container);
}

criar_cartao(obj, body);
