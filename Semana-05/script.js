function altera_divs(){
    const divs = document.querySelectorAll(".minhas_div");
    for (const d of divs){
        d.style.backgroundColor = 'blue';
        d.style.height = '5em';
        d.style.border = 'solid black 2px';
    }
}


const contador = () => {
    const valor = parseInt(document.getElementById('meu_span').innerText);
    document.getElementById('meu_span').innerText = valor + 1;
}

document.getElementById('meu_span').innerText = 7;
altera_divs();
document.getElementById('meu_botao').onclick = contador;

