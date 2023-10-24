const navEMAIL = document.querySelector('.navbar-email');
const desktopMENU = document.querySelector('.desktop-menu');
const navHamIcon = document.querySelector('.menu');
const mobMENU = document.querySelector('.mobile-menu');
const menuCarritoICON = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


navEMAIL.addEventListener('click', toggleDesktopMenu);
navHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoICON.addEventListener('click', toggleCarritoshoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const shoppingCartContainer_closed = shoppingCartContainer.classList.contains('inactive');
    if(!shoppingCartContainer_closed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMENU.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const shoppingCartContainer_closed = shoppingCartContainer.classList.contains('inactive');
    if(!shoppingCartContainer_closed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobMENU.classList.toggle('inactive');
}

function toggleCarritoshoppingCartContainer() {
    const mobMENU_closed = mobMENU.classList.contains('inactive');
    const desktopMENU_closed = desktopMENU.classList.contains('inactive');
    const asideDetail_closed = productDetailContainer.classList.contains('inactive');

    if(!mobMENU_closed) {
        mobMENU.classList.add('inactive');
    }else{
        (!desktopMENU.classList.add('inactive'));
    }

    if(!asideDetail_closed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
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
function renderProducts(arr){
    for(product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const prodcutImg = document.createElement('img');
        prodcutImg.setAttribute('src', product.image);
        prodcutImg.addEventListener('click', openProductDetailAside);
     
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
}

renderProducts(productList);
