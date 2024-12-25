let menu = document.querySelector('#menu-icon')
let NavList = document.querySelector('.NavList')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    NavList.classList.toggle('open')
}