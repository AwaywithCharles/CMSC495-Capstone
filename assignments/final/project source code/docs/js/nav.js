const navDesktopTablet = document.getElementById('nav-desktop-tablet');
const navMobile = document.getElementById('nav-mobile');
const navMobileButtonImg = document.querySelector('#nav-mobile button img');
const navMobileLinks = document.querySelector('#nav-mobile div');

window.addEventListener("load", adjustNavToScreenSize);
window.addEventListener('resize', adjustNavToScreenSize);

function adjustNavToScreenSize() {
    if (window.innerWidth <= 480) {
        navDesktopTablet.classList.add('hidden');
        navMobile.classList.remove('hidden');
    } else {
        navDesktopTablet.classList.remove('hidden');
        navMobile.classList.add('hidden');
    }
}

navMobile.addEventListener('click', () => {
    const link = navMobileButtonImg.getAttribute('src');
    if (link.includes('menu')) {
        navMobileButtonImg.setAttribute('src', 'images/x.svg');
    } else {
        navMobileButtonImg.setAttribute('src', 'images/menu.svg');
    }
    navMobileLinks.classList.toggle('hidden');
})