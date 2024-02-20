const menuBtn = document.getElementById('menuBtn')
const cerrarBtn = document.getElementById('cerrar')

const menu = document.getElementById('menu')

menuBtn.addEventListener('click', openMenu)
cerrarBtn.addEventListener('click',closeMenu)

function openMenu(){
    menu.classList.remove('inactiva')
}

function closeMenu(){
    menu.classList.add('inactiva')
}