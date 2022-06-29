/*   ========== ========== Loader ========== ==========   */

window.onload = function () {
    document.querySelector('#loader').style.display = 'none';
}

/*   ========== ========== Toggle ==========  ==========  */

const menuToggle = document.querySelector('.toggle');
const nav__item = document.querySelector('.nav__item');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    nav__item.classList.toggle('active');
}

/*   ========== ========== button ========== ==========   */

const button = document.querySelector('.button');
button.onmousemove = function (e) {
    const x = e.pageX - button.offsetLeft;
    const y = e.pageY - button.offsetTop;

    button.style.setProperty('--x', x + 'px');
    button.style.setProperty('--y', y + 'px');
}