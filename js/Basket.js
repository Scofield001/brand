'use strict';

class Basket {
    getItems() {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', './responses/getBasket.json', true); //true - Асинхронный запрос
        xhr.send();

        xhr.onreadystatechange = function () {
            console.log('goodBasket ' + xhr.readyState);
            //xhr.readyState
            //0 - запрос не инициализирован
            //1 - загрузка
            //2 - запрос принят
            //regExp - обмен данными
            //4 - запрос выполнен
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status !== 200) {
                console.log('Error goodBasket', xhr.status, xhr.statusText);
                return;
            }
            let data = JSON.parse(xhr.responseText);
            Basket.render(data);
        }
    }
    static render(products) {
        for (let i = 0; i < products.basket.length; i++) {
            let list = document.getElementById('basket'),
                totalPrice = document.getElementById('totalPrice'),
                item = document.createElement('li'),
                link = document.createElement('a'),
                pic = document.createElement('img'),
                inner = document.createElement('div'),
                cap = document.createElement('h3'),
                stars = document.createElement('div'),
                text = document.createElement('span'),
                quantity = document.createElement('span'),
                multi = document.createElement('span'),
                price = document.createElement('span'),
                btnDel = document.createElement('button'),
                iDel = document.createElement('i'),
                count = document.getElementById('count');

            item.classList.add('min-cart__item');
            link.classList.add('min-cart__link');
            link.setAttribute('href', 'good.html');
            pic.classList.add('min-cart__img');
            //Путь к данной картинке
            pic.setAttribute('src', products.basket[i].img_url);
            //Алтернативное название картинки
            pic.setAttribute('alt', products.basket[i].product_name);
            pic.setAttribute('width', '72');
            inner.classList.add('min-cart__inner');
            cap.classList.add('min-cart__title');
            //Имя товара
            cap.textContent = products.basket[i].product_name;
            stars.classList.add('stars');
            text.classList.add('min-cart__text');
            quantity.classList.add('min-cart__quantity');
            //Количество данного товара
            quantity.textContent = '1'; //Посчитать Заглушка
            multi.classList.add('min-cart__multi');
            multi.textContent = 'x';
            price.classList.add('min-cart__price');
            //Цена товра
            price.textContent = '$' + products.basket[i].price;
            btnDel.classList.add('btn-delete');
            //id товара
            btnDel.dataset.id = products.basket[i].id_product;
            iDel.classList.add('fas', 'fa-times-circle');
            //Общее количество товаров
            count.textContent = products.basket.length;
            //Общая сумма товаров
            totalPrice.textContent = '$300'; //Посчитать

            list.appendChild(item).appendChild(link).appendChild(pic);
            link.appendChild(inner).appendChild(cap);
            inner.appendChild(price);
            inner.appendChild(stars);
            for (let k = 0; k < products.basket[i].rating; k++) { //Количество звезд (рейтинг)
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
    add(idProduct, name, price, path, pagePath, rating) {

    this.getItems();

        let basketItem = {
            "id_product": idProduct,
            "product_name": name,
            "price": price,
            "img_url": path,
            "page_url": pagePath,
            "rating": rating
        };

        data.amount += price;
        data.basket.length++;
        data.basket.push(basketItem);
    }
}

let basket = new Basket();

basket.getItems();
basket.add('1', 'product two', '60', 'img/product-2.jpg', 'good.html', 3);
basket.add('1', 'product two', '60', 'img/product-3.jpg', 'good.html', 3);
basket.add('1', 'product two', '60', 'img/product-4.jpg', 'good.html', 3);
/*      "id_product": 1,
      "product_name": "product one",
      "price": 50,
      "img_url": "img/product-1.jpg",
      "page_url": "good.html",
      "rating": 5*/

