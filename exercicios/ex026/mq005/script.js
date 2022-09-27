/* Exibe o menu */ 
let icon = document.getElementById('menuIcon');
let itensMenu = document.getElementById('menu');

icon.onclick = function listItens() {
    if (itensMenu.style.display == 'block') {
        itensMenu.style.display = 'none';
    } else {
        itensMenu.style.display = 'block';
    }
}

/* Resolve o problema do menu desaparecer ao minimizar as opções do menu */

function mudouTamanho() {
    if (innerWidth >= 768) {
        itensMenu.style.display = 'block'
    } 
}