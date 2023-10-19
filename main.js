const navEMAIL = document.querySelector('.navbar-email');
const desktopMENU = document.querySelector('.desktop-menu');
const navHamIcon = document.querySelector('.menu');
const mobMENU = document.querySelector('.mobile-menu');
const menuCarritoICON = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

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

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
</div>
*/

for(product of productList) {
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');

   const prodcutImg = document.createElement('img');
   prodcutImg.setAttribute('src', product.image);

   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');
   
   const productPrice = document.createElement('p');
   productPrice.innerText = '$ ' + product.price;
   const productName = document.createElement('p');
   productName.innerText = product.name;

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);

   const productInfoFigure = document.createElement('figure');
   const productIcon = document.createElement('img');
   productIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

   productInfoFigure.appendChild(productIcon);

   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);

   productCard.appendChild(prodcutImg);
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard);
}