const navEMAIL = document.querySelector('.navbar-email');
const desktopMENU = document.querySelector('.desktop-menu');

navEMAIL.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('click')
    desktopMENU.classList.toggle('inactive');
}