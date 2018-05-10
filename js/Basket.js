'use strict';

class Basket {
    renderBasketGood() {
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

            for (let i = 0; i < data.length; i++) {
                let dataSet = data[i],
                    list = document.getElementById('basket'),
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
                pic.setAttribute('src', dataSet.img_url);
                //Алтернативное название картинки
                pic.setAttribute('alt', dataSet.product_name);
                pic.setAttribute('width', '72');
                inner.classList.add('min-cart__inner');
                cap.classList.add('min-cart__title');
                //Имя товара
                cap.textContent = dataSet.product_name;
                stars.classList.add('stars');
                text.classList.add('min-cart__text');
                quantity.classList.add('min-cart__quantity');
                //Количество данного товара
                quantity.textContent = dataSet.countGood.toString(); //Посчитать Заглушка
                multi.classList.add('min-cart__multi');
                multi.textContent = 'x';
                price.classList.add('min-cart__price');
                //Цена товра
                price.textContent = '$' + dataSet.price;
                btnDel.classList.add('btn-delete');
                //id товара
                btnDel.dataset.id = dataSet.id_product;
                iDel.classList.add('fas', 'fa-times-circle');
                //Общее количество товаров
                count.textContent = data.length;
                //Общая сумма товаров
                totalPrice.textContent = '$300'; //Посчитать

                list.appendChild(item).appendChild(link).appendChild(pic);
                link.appendChild(inner).appendChild(cap);
                inner.appendChild(price);
                inner.appendChild(stars);
                for (let k = 0; k < dataSet.rating; k++) { //Количество звезд (рейтинг)
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
    }
}

let basket = new Basket();

basket.renderBasketGood();



