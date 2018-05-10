"use strict";

let xhr = new XMLHttpRequest();

xhr.open('GET', './responses/catalogData.json', true); //true - Асинхронный запрос
xhr.send();

xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    //xhr.readyState
    //0 - запрос не инициализирован
    //1 - загрузка
    //2 - запрос принят
    //regExp - обмен данными
    //4 - запрос выполнен
    if(xhr.readyState !== 4){
        return;
    }
    if(xhr.status !== 200)
    {
        console.log('Error', xhr.status, xhr.statusText);
        return;
    }
    let response = JSON.parse(xhr.responseText),
        list = document.getElementById('products');

    for (let i = 0; i < response.length; i++) { //json ОК
        let responseSet = response[i],
            item = document.createElement('li'),
            link = document.createElement('a'),
            pic = document.createElement('img'),
            mBox = document.createElement('div'),
            cap = document.createElement('h3'),
            inner = document.createElement('div'),
            price = document.createElement('span'),
            stars = document.createElement('div'),
            buttons = document.createElement('div'),
            btnBuy = document.createElement('button'),
            buttonsBox = document.createElement('div'),
            btnSend = document.createElement('button'),
            iSend = document.createElement('i'),
            btnLike = document.createElement('button'),
            iLike = document.createElement('i');

        item.classList.add('products__item');
        link.classList.add('products__link');
        link.setAttribute('href', 'good.html');
        pic.classList.add('products__img');
        pic.setAttribute('src', responseSet.img_url); //json ОК
        pic.setAttribute('alt', responseSet.product_name); //json ОК
        pic.setAttribute('width', '261');
        mBox.classList.add('products__box');
        cap.classList.add('products__caption');
        cap.textContent = responseSet.product_name; //json ОК
        inner.classList.add('products__inner');
        price.classList.add('products__price');
        price.textContent = '$' + responseSet.price.toFixed(2); //json ОК
        stars.classList.add('stars');
        buttons.classList.add('btn-products');
        btnBuy.classList.add('btn-products__add');
        btnBuy.textContent = 'Add to Cart';
        btnBuy.dataset.price = responseSet.price; //json; ОК
        btnBuy.dataset.id = responseSet.id_product; //json ОК
        buttonsBox.classList.add('btn-products__box');
        btnSend.classList.add('btn-products__send');
        iSend.classList.add('fas', 'fa-retweet', 'fa-lg');
        btnLike.classList.add('btn-products__like');
        iLike.classList.add('far', 'fa-heart', 'fa-lg');

        list.appendChild(item).appendChild(link).appendChild(pic);
        link.appendChild(mBox).appendChild(cap);
        mBox.appendChild(inner).appendChild(price);
        inner.appendChild(stars);
        for (let k = 0; k < responseSet.rating; k++) { //рисуем рейтинг
            let star = document.createElement('span'),
                iStar = document.createElement('i');
            star.classList.add('stars__icon');
            iStar.classList.add('fas', 'fa-star', 'fa-xs');
            stars.appendChild(star).appendChild(iStar);
        }
        item.appendChild(buttons).appendChild(btnBuy);
        buttons.appendChild(buttonsBox).appendChild(btnSend).appendChild(iSend);
        buttonsBox.appendChild(btnLike).appendChild(iLike);
    }

};
