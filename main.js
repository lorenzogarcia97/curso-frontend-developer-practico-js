const navEMAIL = document.querySelector('.navbar-email');
const desktopMENU = document.querySelector('.desktop-menu');
const navHamIcon = document.querySelector('.menu');
const mobMENU = document.querySelector('.mobile-menu');

navEMAIL.addEventListener('click', toggleDesktopMenu);
navHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    console.log('click')
    desktopMENU.classList.toggle('inactive');
}

function toggleMobileMenu(){
    console.log('click')
    mobMENU.classList.toggle('inactive');
}