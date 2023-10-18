const navEMAIL = document.querySelector('.navbar-email');
const desktopMENU = document.querySelector('.desktop-menu');
const navHamIcon = document.querySelector('.menu');
const mobMENU = document.querySelector('.mobile-menu');
const menuCarritoICON = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuCarritoICON.addEventListener('click', toggleCarritoAside);
navEMAIL.addEventListener('click', toggleDesktopMenu);
navHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    const aside_closed = aside.classList.contains('inactive');
    if(!aside_closed) {
        aside.classList.add('inactive');
    }
    desktopMENU.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const aside_closed = aside.classList.contains('inactive');
    if(!aside_closed) {
        aside.classList.add('inactive');
    }
    mobMENU.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const mobMENU_closed = mobMENU.classList.contains('inactive');
    const desktopMENU_closed = desktopMENU.classList.contains('inactive');
    

    if(!mobMENU_closed) {
        mobMENU.classList.add('inactive');
    }else{
        (!desktopMENU.classList.add('inactive'));
    }

    aside.classList.toggle('inactive');
}