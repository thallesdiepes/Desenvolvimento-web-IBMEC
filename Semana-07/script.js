function altera_divs(){
    const divs = document.querySelectorAll('.minhas_div');
    for (const d of divs){
        d.style.backgroundColor = 'pink';
        d.style.heigh = '15em';
        d.style.border = 'solid black 2px';
    }
} 

const contador = () => {
    const valor = document.getElementById('meu_span').innerText;
    const novo = parseInt(valor);
    document.getElementById('meu_span').innerText = novo+1;
}

document.getElementById('meu_span').innerText = 78; 
altera_divs();
document.getElementById('meu_botao').onclick = contador; 
