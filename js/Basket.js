'use strict';

function renderCart() {
    let list = document.getElementById('goodsCart')
        /*total = document.getElementById('totalPrice')*/;
    for (let i = 0; i < 5; i++) { //вставить данные из json
        let item = document.createElement('li');
        item.classList.add('min-cart__item');
        let link = document.createElement('a');
        link.classList.add('min-cart__link');
        link.setAttribute('href', 'good.html');
        let pic = document.createElement('img');
        pic.classList.add('min-cart__img');
        pic.setAttribute('src', 'img/product-1.jpg'); //вставить данные из json
        pic.setAttribute('alt', 'product-1'); //вставить данные из json
        pic.setAttribute('width', '72');
        let inner = document.createElement('div');
        inner.classList.add('min-cart__inner');
        let cap = document.createElement('h3');
        cap.classList.add('min-cart__title');
        cap.textContent = 'product man'; //вставить данные из json
        let stars = document.createElement('div');
        stars.classList.add('stars');
        let text = document.createElement('span');
        text.classList.add('min-cart__text');
        let quantity = document.createElement('span');
        quantity.classList.add('min-cart__quantity');
        quantity.textContent = '9'; //вставить данные из json
        let multi = document.createElement('span');
        multi.classList.add('min-cart__multi');
        multi.textContent = 'x';
        let price = document.createElement('span');
        price.classList.add('min-cart__price');
        price.textContent = '$199'; //вставить данные из json
        let btnDel = document.createElement('button');
        btnDel.classList.add('btn-delete');
        let iDel = document.createElement('i');
            iDel.classList.add('fas', 'fa-times-circle');

        list.appendChild(item).appendChild(link).appendChild(pic);
        link.appendChild(inner).appendChild(cap);
            inner.appendChild(price);
            inner.appendChild(stars);
            for (let k = 0; k < 5; k++) {
                let star = document.createElement('span');
                star.classList.add('stars__icon');
                let iStar = document.createElement('i');
                iStar.classList.add('fas', 'fa-star', 'fa-xs');
                stars.appendChild(star).appendChild(iStar);
            }
        inner.appendChild(text).appendChild(quantity);
            text.appendChild(multi);
            text.appendChild(price);
        item.appendChild(btnDel).appendChild(iDel);
    }
}
renderCart();
