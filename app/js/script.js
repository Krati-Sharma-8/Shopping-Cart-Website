let products = [
    {
        name: "Cappuccino",
        price: 50,
        incart: 0
    },
    {
        name: "Frappe Coffee",
        price: 40,
        incart: 0
    },
    {
        name: "Brioche Bread",
        price: 40,
        incart: 0
    },
    {
        name: "Hunger's Bread",
        price: 35,
        incart: 0
    },
    {
        name: "Honey and Strawberry Tart",
        price: 100,
        incart: 0
    },
    {
        name: "Veg loaded Sandwich",
        price: 80,
        incart: 0
    },
    {
        name: "Walnut Caramel Pancake",
        price: 90,
        incart: 0
    },
    {
        name: "Chocolate Chips Cookies",
        price: 20,
        incart: 0
    }
]

var totalCost = 0;
var noOfItems = 0;
var addToCart = document.querySelectorAll(".addToCart");
var cart = document.querySelectorAll(".cartItem");
var removebt = document.querySelectorAll(".removebtn");


for(let i = 0; i < ; i++){
    addToCart[i].addEventListener('click', function(){
        noOfItems++;
        totalCost += products[i].price;
        if(noOfItems == 1){
            document.querySelector('.cart').classList.remove('none');
        }
        products[i].incart++;
        if(products[i].incart == 1){
            cart[i].classList.remove('none');
            document.querySelectorAll('.quantity')[i].innerHTML = products[i].incart;
        }else{
            document.querySelectorAll('.quantity')[i].innerHTML = products[i].incart;
        }
        document.querySelector('.totalCost').innerHTML = "$" + totalCost;
    })
    removebt[i].addEventListener('click', function(){
        noOfItems--;
        totalCost -= products[i].price;
        if(noOfItems == 0){
            document.querySelector('.cart').classList.add('none');
        }
        products[i].incart--;
        if(products[i].incart == 0){
            cart[i].classList.add('none');
        }else{
            document.querySelectorAll('.quantity')[i].innerHTML = products[i].incart;
        }
        document.querySelector('.totalCost').innerHTML = "$" + totalCost;
    })
}
