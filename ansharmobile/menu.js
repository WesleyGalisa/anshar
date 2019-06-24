var menu = document.getElementById('menu');
var botao = document.getElementById('botao2');
var block = 'block';
var none = 'none';

function trocamenu(){
    if(menu.style.display == none){
        menu.style.display = block
    } else(menu.style.display = none);
}

botao.addEventListener('click', trocamenu)