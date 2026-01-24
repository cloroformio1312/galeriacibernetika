
const btnAbrirMenuMobile = document.querySelector('#btn-menumobile')
const menuMobile = document.querySelector('#menumobile')

btnAbrirMenuMobile.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu');
})

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
})