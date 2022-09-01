var count = 0;
var obj = {};
const global = [{
    'id': '1',
    'img': 'img/burger.jpg',
    'price': '150',
    'qty': 'piece',
    'description': 'burger',
    'about' : 'A spicy Chicken patty, shredded Lettuce topped with Jalapenos and Cheese slice, Spicy Habanero sauce & Cheese sauce layered between toasted Whole Wheat Buns.'
},
{
    'id': '2',
    'img': 'img/frenchFries.jpg',
    'price': '100',
    'qty': 'Plate',
    'description': 'french-Fries',
    'about' : 'Fries (L)- World Famous Fries, crispy golden, fried to perfection and lightly salted. Add to your order and enjoy it as is or with your favourite dips and seasoning.'
},
{
    'id': '3',
    'img': 'img/kabab.jpg',
    'price': '130',
    'qty': 'Plate',
    'description': 'kabab',
    'about' : 'Mouth Melting Kebab With Yogurt & Cheesy Richness.'
},
{
    'id': '4',
    'img': 'img/koyaLaddu.jpg',
    'price': '450',
    'qty': 'KG',
    'description': 'koya-Laddu',
    'about' : 'Sweetened khoya dumplings stuffed with rasgullas.- an exotic Bengali sweet.'
},
{
    'id': '5',
    'img': 'img/maarWaadiLaddu.jpg',
    'price': '350',
    'qty': 'KG',
    'description': 'maarWaadi-Laddu',
    'about' : 'Traditional Marwaadi ladoo are made from bundi and roasted with ghee in a kadhai, flavoured with sugar and cardamom and shaped into tight round balls.'
},
{
    'id': '6',
    'img': 'img/motichoorLaddu.jpg',
    'price': '250',
    'qty': 'KG',
    'description': 'motichoor-Laddu',
    'about' : 'Pistachios and almonds added into the holy mix of gram flour, sugar, pure desi ghee and watermelon seeds, prepared into round balls forms meghrajs all time favourite special boondi laddu.'
},
{
    'id': '7',
    'img': 'img/paneer.jpg',
    'price': '110',
    'qty': '75gm',
    'description': 'paneer',
    'about' : 'Combination of cottage cheese and exotic gravy made from tomato puree, chopped onions, cashew nuts and spices'
},
{
    'id': '8',
    'img': 'img/pizza.jpg',
    'price': '400',
    'qty': '6-pieces',
    'description': 'pizza',
    'about' : 'Crispy brown crust with a generous filling of rich tomato sauce, mixed with carrots, bell peppers, beans, onions and mozzarella. Served HOT.'
},
{
    'id': '9',
    'img': 'img/rice.jpg',
    'price': '90',
    'qty': 'Plate',
    'description': 'rice',
    'about': 'Classic wok tossed rice with an assortment of mix vegetables and chinese condiments'
},
{
    'id': '10',
    'img': 'img/roti.jpg',
    'price': '10',
    'qty': 'piece',
    'description': 'roti',
    'about' : 'Layered crusty indian bread of unleavened buttered dough cooked in tandoor'
},
{
    'id': '11',
    'img': 'img/tandooriChicken.jpg',
    'price': '250',
    'qty': '300gm',
    'description': 'tandoori-Chicken',
    'about' : 'Tender whole chicken in a spicy hung curd marination cooked in tandoor. Served with mint chutney and masala onion salad.'
}];

const container = document.getElementById('container');
// apiCall = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//         global = JSON.parse(this.responseText);
//         console.log(global);
//         call();
//     }
//     xhr.open("GET", 'https://foodbukka.herokuapp.com/api/v1/menu', true);
//     xhr.send();
// }


call = () => {
    let bodystr = ``;
    for (let data of global) {
        bodystr = `${bodystr}
        <div class='main' id=${data.id}>
            <div class='img-left'>
                <img class='img' src=${data.img} title=${data.description}>
            </div>
            <div class='right'>
                <p class='heading' style='font-family'><u>${data.description.toUpperCase()}</u></p>
                <p class='desc'> ${data.about}</p>
                <span class="cart btn1">
                    <button type="button" onclick="button('${data.description}', '${data.id}')">Add To Cart</button>
                </span>
                <span class="cart btn2 none">
                    <button class="addsub" onclick='remove("${data.description}","${data.id}")'>-</button>
                    <span class="count">1</span>
                    <button onclick='Add("${data.description}","${data.id}")'>+</button>
                </span>
                <span class='price'>₹ ${data.price} / ${data.qty}</span>
            </div>
        </div>`;
    }
    container.innerHTML = bodystr;
}

button = (x, id) => {
    if (!obj[x]) {
        obj[x] = 1;
        const ele = document.getElementById(id);
        ele.querySelector('.count').textContent = obj[x];
        ele.querySelector('.btn1').classList.add('none');
        ele.querySelector('.btn2').classList.remove('none');
        calcTotal('add');
    }
}

remove = (x, id) => {
    obj[x] -= 1;
    const ele = document.getElementById(id);
    ele.querySelector('.count').textContent = obj[x];
    if (obj[x] == 0) {
        ele.querySelector('.btn2').classList.add('none');
        ele.querySelector('.btn1').classList.remove('none');
    }
    calcTotal('subtract');
}

Add = (x, id) => {
    obj[x] += 1;
    const ele = document.getElementById(id);
    ele.querySelector('.count').textContent = obj[x];
    calcTotal('add');
}

calcTotal = (flag) => {
    if (flag === 'add')
        document.getElementById('total').innerText = ++count;
    else
        document.getElementById('total').innerText = --count;
}

// setTimeout(() => {
//     mainPageLoad();
// }, 4000);

// function mainPageLoad() {
//     document.getElementById("loadPage").style.display = "none";
//     document.getElementById("mainPage").style.display = "block";
// }

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
      document.getElementById("nav").style.display = "none";
    } else {
      document.getElementById("nav").style.display = "initial";
    }
  }
