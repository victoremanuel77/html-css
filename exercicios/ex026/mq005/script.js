let icon = document.getElementById('menuIcon');
let itensMenu = document.getElementById('menu');

icon.onclick = function listItens() {
    if (itensMenu.style.display == 'block') {
        itensMenu.style.display = 'none';
    } else {
        itensMenu.style.display = 'block';
    }
}