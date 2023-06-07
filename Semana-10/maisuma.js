const body = document.querySelector('body');

const container = document.createElement('div');
const imagem = document.createElement('img');
const legenda = document.createElement('h5');
const nome = document.createElement('h4');

nome.innerHTML =sessionStorage.getItem('nome');

imagem.src = sessionStorage.getItem('caminho');
imagem.style.width = '150px';

legenda.innerHTML = sessionStorage.getItem('descri');

container.style.border = '1px black solid';
container.style.width = 'fit-content';
container.style.textAlign = 'center';
container.style.margin = '0 auto';

container.appendChild(nome);
container.appendChild(imagem);
container.appendChild(legenda);

body.innerHTML = '';
body.appendChild(container)
