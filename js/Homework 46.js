// const data_1 = [
//     {
//         img_1: '1.png',
//         img_2: 'heart.png',
//         img_3: 'sale.png',
//         title: 'Медный чайник с фарфоровой ручкой',
//         price: '1 953 грн',
//     },
//     {
//         img_1: '2.png',
//         img_2: 'heart.png',
//         img_3: 'sale.png',
//         title: 'Медный чайник с фарфоровой ручкой',
//         price: '1 953 грн',
//     },
//     {
//         img_1: '3.png',
//         img_2: 'heart.png',
//         img_3: 'sale.png',
//         title: 'Медный чайник с фарфоровой ручкой',
//         price: '1 953 грн',
//     },
// ]

// const data_2 = [
//     {
//         img: 'user.png',
//         icon: 'union.png',
//         name: 'Иван Иванов',
//         comment: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. ',
//         date: '20.10.21',
//     },
//     {
//         img: 'user.png',
//         icon: 'union.png',
//         name: 'Иван Иванов',
//         comment: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. ',
//         date: '20.10.21',
//     },
//     {
//         img: 'user.png',
//         icon: 'union.png',
//         name: 'Иван Иванов',
//         comment: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. ',
//         date: '20.10.21',
//     },
// ]

// const data_3 = [
//     {
//         img: 'star.png',
//         title: 'Аутентичность',
//         descrip: 'Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.',
//         more: 'Читать больше',
//     },
//     {
//         img: 'star.png',
//         title: 'Изысканность',
//         descrip: 'Наши изделия из меди являются очень практичными. В то же время они наполнят особой магией ваш дом или рабочее....',
//         more: 'Читать больше',
//     },
//     {
//         img: 'star.png',
//         title: 'Честная оплата',
//         descrip: 'Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но все начинается c...',
//         more: 'Читать больше',
//     },
//     {
//         img: 'star.png',
//         title: 'Большой ассортимент',
//         descrip: 'У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования...',
//         more: 'Читать больше',
//     },
    
// ]

let container = document.querySelector('.container')

// ряд 1

let p_1st = document.createElement('p')
let row = document.createElement('div')

p_1st.innerHTML = 'МЫ РЕКОМЕНДУЕМ'
p_1st.classList.add('p_1st')
row.classList.add('row')

// ряд 2

let p_2nd = document.createElement('p')
let row_2nd = document.createElement('div')

p_2nd.innerHTML = 'СКИДКИ'
p_2nd.classList.add('p_2nd')
row_2nd.classList.add('row_5')

// ряд 3

let p_3rd = document.createElement('p')
let row_3rd = document.createElement('div')
    
p_3rd.innerHTML = 'ЧТО ДУМАЮТ О НАС'
p_3rd.classList.add('p_3rd')
row_3rd.classList.add('row')

// ряд 4

let p_4th = document.createElement('p')
let row_4th = document.createElement('div')

p_4th.innerHTML = 'Почему выбирают нас'
p_4th.classList.add('p_3rd')
row_4th.classList.add('row_5')


axios.get("http://localhost:3001/data_1")
    .then(res => {
        console.log(res.data);
        reload(res.data)
    })

axios.get("http://localhost:3001/data_2")
    .then(res => {
        console.log(res.data);
        reload_2(res.data)
    })

axios.get("http://localhost:3001/data_3")
    .then(res => {
        console.log(res.data);
        reload_3(res.data)
    })

const reload = (arr) => {

    for ( let item of arr) {
        let column = document.createElement('div')
        let img_product = document.createElement('img')
        let img_heart = document.createElement('img')
        let bot_1st = document.createElement('div')
        let name_1st = document.createElement('p')
        let price_1st = document.createElement('p')
    
        column.classList.add('column')
        img_product.src = `./img/${item.img_1}`
        img_product.classList.add('img_product')
        img_heart.src = `./img/${item.img_2}`
        img_heart.classList.add('img_heart')
        bot_1st.classList.add('bot_1st')
        name_1st.innerHTML = item.title
        name_1st.classList.add('name_1st')
        price_1st.innerHTML = item.price
        price_1st.classList.add('price_1st')
    
        container.append(p_1st, row)
        row.append(column)
        column.append(img_product, img_heart, bot_1st)
        bot_1st.append(name_1st, price_1st)
    }
    
        let square_div = document.createElement('div')
        let square_1 = document.createElement('div')
        let square_2 = document.createElement('div')
        let square_3 = document.createElement('div')
        let btn = document.createElement('button')
    
        square_div.classList.add('square_div')
        square_1.classList.add('square_1')
        square_2.classList.add('square_2')
        square_3.classList.add('square_3')
        btn.innerHTML = 'Перейти в каталог'
        btn.classList.add('btn')
    
        container.append(square_div, btn)
        square_div.append(square_1, square_2, square_3)

        for ( let item of arr) {
            let column = document.createElement('div')
            let img_product = document.createElement('img')
            let img_heart = document.createElement('img')
            let img_sale = document.createElement('img')
            let bot_1st = document.createElement('div')
            let name_1st = document.createElement('p')
            let price_box = document.createElement('div')
            let price_2nd_grey = document.createElement('p')
            let price_2nd = document.createElement('p')
        
            column.classList.add('column')
            img_product.src = `./img/${item.img_1}`
            img_product.classList.add('img_product')
            img_heart.src = `./img/${item.img_2}`
            img_heart.classList.add('img_heart')
            img_sale.src = `./img/${item.img_3}`
            img_sale.classList.add('img_sale')
            bot_1st.classList.add('bot_1st')
            name_1st.innerHTML = item.title
            name_1st.classList.add('name_1st')
            price_box.classList.add('price_box')
            price_2nd_grey.innerHTML = item.price
            price_2nd_grey.classList.add('price_2nd_grey')
            price_2nd.innerHTML = item.price
            price_2nd.classList.add('price_2nd')
        
            container.append(p_2nd, row_2nd)
            row_2nd.append(column)
            column.append(img_product, img_heart, img_sale, bot_1st)
            bot_1st.append(name_1st, price_box)
            price_box.append(price_2nd_grey, price_2nd)
        }

        let square_div_2 = document.createElement('div')
        let square_1_2 = document.createElement('div')
        let square_2_2 = document.createElement('div')
        let square_3_2 = document.createElement('div')
        let btn_2 = document.createElement('button')
    
        square_div_2.classList.add('square_div')
        square_1_2.classList.add('square_1')
        square_2_2.classList.add('square_2')
        square_3_2.classList.add('square_3')
        btn_2.innerHTML = 'Перейти в каталог'
        btn_2.classList.add('btn')
    
        container.append(square_div_2, btn_2)
        square_div_2.append(square_1_2, square_2_2, square_3_2)
}

const reload_2 = (arr) => {

for ( let item of arr) {
    let column = document.createElement('div')
    let img_user = document.createElement('img')
    let name = document.createElement('p')
    let comment = document.createElement('p')
    let date = document.createElement('p')
    let img_icon = document.createElement('img')

    column.classList.add('column_3')
    img_user.src = `./img/${item.img}`
    img_user.classList.add('img_user')
    name.innerHTML = item.name
    name.classList.add('name')
    comment.innerHTML = item.comment
    comment.classList.add('comment')
    date.innerHTML = item.date
    date.classList.add('date')
    img_icon.src = `./img/${item.icon}`
    img_icon.classList.add('img_icon')

    container.append(p_3rd, row_3rd)
    row_3rd.append(column)
    column.append(img_user, img_icon, name, comment, date)
}

    let square_div_3 = document.createElement('div')
    let square_1_3 = document.createElement('div')
    let square_2_3 = document.createElement('div')
    let square_3_3 = document.createElement('div')

    square_div_3.classList.add('square_div')
    square_1_3.classList.add('square_1')
    square_2_3.classList.add('square_2')
    square_3_3.classList.add('square_3')


    container.append(square_div_3)
    square_div_3.append(square_1_3, square_2_3, square_3_3)
}

const reload_3 = (arr) => {


for ( let item of arr) {
    let column = document.createElement('div')
    let img = document.createElement('img')
    let title = document.createElement('p')
    let descrip = document.createElement('p')
    let more = document.createElement('p')

    column.classList.add('column_4')
    img.src = `./img/${item.img}`
    img.classList.add('img')
    title.innerHTML = item.title
    title.classList.add('title')
    descrip.innerHTML = item.descrip
    descrip.classList.add('descrip')
    more.innerHTML = item.more
    more.classList.add('more')

    container.append(p_4th, row_4th)
    row_4th.append(column)
    column.append(img, title, descrip, more)
}    

let row_5th = document.createElement('div')
row_5th.classList.add('row_5')

for ( let item of arr) {
    let column = document.createElement('div')
    let img = document.createElement('img')
    let title = document.createElement('p')
    let descrip = document.createElement('p')
    let more = document.createElement('p')

    column.classList.add('column_4')
    img.src = `./img/${item.img}`
    img.classList.add('img')
    title.innerHTML = item.title
    title.classList.add('title')
    descrip.innerHTML = item.descrip
    descrip.classList.add('descrip')
    more.innerHTML = item.more
    more.classList.add('more')

    container.append(row_5th)
    row_5th.append(column)
    column.append(img, title, descrip, more)
}    
}
  



// ряд 6

let container_2 = document.querySelector('.container_2')

let row_6th = document.createElement('div')
let img_top = document.createElement('img')
let column_1 = document.createElement('div')
let img_copper = document.createElement('img')
let column_1_p1 = document.createElement('p')
let column_1_p2 = document.createElement('p')
let column_2 = document.createElement('div')
let column_2_p1 = document.createElement('p')
let column_2_p2 = document.createElement('p')
let column_2_p3 = document.createElement('p')
let column_2_p4 = document.createElement('p')
let column_2_p5 = document.createElement('p')
let column_2_p6 = document.createElement('p')
let column_3 = document.createElement('div')
let column_3_p1 = document.createElement('p')
let column_3_p2 = document.createElement('p')
let column_3_p3 = document.createElement('p')
let column_3_p4 = document.createElement('p')
let column_3_p5 = document.createElement('p')
let column_3_p6 = document.createElement('p')
let column_3_p7 = document.createElement('p')
let column_4 = document.createElement('div')
let column_4_p1 = document.createElement('p')
let column_4_p2 = document.createElement('p')
let column_4_p3 = document.createElement('p')
let column_4_p4 = document.createElement('p')
let column_4_in = document.createElement('div')
let img_twitter = document.createElement('img')
let img_fb = document.createElement('img')
let img_instagram = document.createElement('img')


row_6th.classList.add('row_6')
img_top.src = './img/top.png'
img_top.classList.add('img_top')

column_1.classList.add('column-1')
img_copper.src = './img/copper.png'
img_copper.classList.add('img_copper')
column_1_p1.innerHTML = '© 2021 “Copper Pro” Все права защищенны'
column_1_p1.classList.add('column_1_p1')
column_1_p2.innerHTML = 'Политика конфиденциальности'
column_1_p2.classList.add('column_1_p2')

column_2.classList.add('column-2')
column_2_p1.innerHTML = 'Навигация'
column_2_p1.classList.add('column_2_p1')
column_2_p2.innerHTML = 'Каталог'
column_2_p2.classList.add('column_2_p2')
column_2_p3.innerHTML = 'Новости'
column_2_p3.classList.add('column_2_p2')
column_2_p4.innerHTML = 'Доставка'
column_2_p4.classList.add('column_2_p2')
column_2_p5.innerHTML = 'О нас'
column_2_p5.classList.add('column_2_p2')
column_2_p6.innerHTML = 'Контакты'
column_2_p6.classList.add('column_2_p2')

column_3.classList.add('column-3')
column_3_p1.innerHTML = 'Каталог'
column_3_p1.classList.add('column_2_p1')
column_3_p2.innerHTML = 'Для эфирных масел'
column_3_p2.classList.add('column_2_p2')
column_3_p3.innerHTML = 'Для гидролатов'
column_3_p3.classList.add('column_2_p2')
column_3_p4.innerHTML = 'Медная посуда'
column_3_p4.classList.add('column_2_p2')
column_3_p5.innerHTML = 'Аксессуары из меди'
column_3_p5.classList.add('column_2_p2')
column_3_p6.innerHTML = 'Индивидуальный заказ'
column_3_p6.classList.add('column_2_p2')
column_3_p7.innerHTML = 'Скидки и предложения'
column_3_p7.classList.add('column_2_p2')

column_4.classList.add('column-4')
column_4_p1.innerHTML = 'Контакты'
column_4_p1.classList.add('column_2_p1')
column_4_p2.innerHTML = 'Бажана 8-Б, Киев, 02132 Украина'
column_4_p2.classList.add('column_2_p2')
column_4_p3.innerHTML = '+38 (096) 990 67 56'
column_4_p3.classList.add('column_2_p2')
column_4_p4.innerHTML = 'a.alambik@gmail.com'
column_4_p4.classList.add('column_2_p2')
column_4_in.classList.add('column-4_in')
img_twitter.src = './img/twitter.png'
img_twitter.classList.add('img_twitter')
img_fb.src = './img/fb.png'
img_fb.classList.add('img_fb')
img_instagram.src = './img/instagram.png'
img_instagram.classList.add('img_instagram')


container_2.append(row_6th)
row_6th.append(column_1, column_2, column_3, column_4, img_top)
column_1.append(img_copper, column_1_p1, column_1_p2)
column_2.append(column_2_p1, column_2_p2, column_2_p3, column_2_p4, column_2_p5, column_2_p6)
column_3.append(column_3_p1, column_3_p2, column_3_p3, column_3_p4, column_3_p5, column_3_p6, column_3_p7)
column_4.append(column_4_p1, column_4_p2, column_4_p3, column_4_p4, column_4_in)
column_4_in.append(img_twitter, img_fb, img_instagram)

let img_left_1 = document.createElement('img')
let img_right_1 = document.createElement('img')
let img_left_2 = document.createElement('img')
let img_right_2 = document.createElement('img')
let img_left_3 = document.createElement('img')
let img_right_3 = document.createElement('img')

img_left_1.src = './img/left.png'
img_left_1.classList.add('img_left_1')
img_left_2.src = './img/left.png'
img_left_2.classList.add('img_left_2')
img_left_3.src = './img/left.png'
img_left_3.classList.add('img_left_3')

img_right_1.src = './img/right.png'
img_right_1.classList.add('img_right_1')
img_right_2.src = './img/right.png'
img_right_2.classList.add('img_right_2')
img_right_3.src = './img/right.png'
img_right_3.classList.add('img_right_3')

container.append(img_left_1, img_right_1, img_left_2, img_right_2, img_left_3, img_right_3)