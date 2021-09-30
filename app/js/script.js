// Scripts
let carts = document.querySelectorAll('.btn add-cart');

let products = [
    {
        name:'Cappuccino',
        tag: 'cappuccino',
        price: 50,
        inCart:0
    },
    {
        name:'Frappe Coffee',
        tag: 'frappecoffe',
        price: 40,
        inCart:0
    },
    {
        name:'Brioche Bread',
        tag: 'briochebread',
        price: 40,
        inCart:0
    },
    {
        name:'Hunger\'s Bread',
        tag: 'hungersbread',
        price: 35,
        inCart:0
    },
    {
        name:'Honey and Strawberry Tart',
        tag: 'honeyandstrawberrytart',
        price: 100,
        inCart:0
    },
    {
        name:'Veg Loaded Sandwitch',
        tag: 'vegloadedsandwitch',
        price: 80,
        inCart:0
    },
    {
        name:'Walnut Caramel Pancake',
        tag: 'walnutcaramelpancake',
        price: 90,
        inCart:0
    },
    {
        name:'Chocochip Cookie',
        tag: 'chocochipcookie',
        price: 20,
        inCart:0
    }

];
for(let i=0; i< carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.addtocart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers =localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if( productNumbers){
        localStorage.setItem('cartNumbers', productNumbers +1);
        document.querySelector('.addtocart span').textContent = productNumbers +1;
    } else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.addtocart span').textContent = 1;
    }
    
    setItems(product);
}

function setItems( product){
    let cartItems = localStorage.getItem(' productsInCart')
    cartItems = JSON.parse(cartItems); 

    if(cartItems !=null){
        
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].incart +=1;
    } else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    product.inCart = 1;

    cartItems ={
        [product.tag]: product
    }

    localStorage.setItem("productsinCart", JSON.stringify(cartItems));


}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');  
     

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost +product.price);
    }else{
        localStorage.setItem("totalCost",product.price);
    }
    

}

function displayCart(){
    let cartItems = localStorage.getItem("productsinCart");
    cartItem = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');


    if( cartItems && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML +=`
            <div class = "product">
                <i class="fas fa-times-circle"></i>
                <span>${item.name}</span>
            </div>
            <div class ="price">${item.price},00</div>
            <div class = "quantity">
                <i class="fas fa-arrow-circle-left"></i>
                <span>${item.incart}</span>
                <i class="fas fa-arrow-circle-right"></i>
            </div>
            <div class = "total">
                ${item.incart*item.price},00
            </div>
            `
        });

        productContainer.innerHTML +=`
            <div class = "basketTotalContainer">
                <h4 class = "basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class = "basketTotal">
                    $${cartCost},00
                </h4>    
        `;
    }
}
onLoadCartNumbers();
displayCart();








