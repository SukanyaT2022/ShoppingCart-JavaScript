function openCart(){
document.getElementById("controlOpenCart").style.right="0";
//0 cart will show up-- css line 89
}

function closecart(){
    document.getElementById("controlOpenCart").style.right="-500px";
//-500px means cart disappear
}




// if the page load and then we go to ready state function
if (document.readyState=="loading"){
   document.addEventListener("DOMContentLoaded",ready)
}else{
ready()
}


// when page ready and page is setup- what will happen 
//when we click add sp remove button will show side by side remove function
//which function will be call when in ready function
function ready(){
    //add item in cart so remove button will show up
    var removeCartItemButtons = document.getElementsByClassName('removeButton')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
    }

    
    //once click add item so this function will be call add quantity-
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
var input = quantityInputs[i]
input.addEventListener('change', quantityChanged)
}

var addToCartButtons = document.getElementsByClassName('controlAllButton')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

}

// completed ready function


// start add to cart function 
function addToCartClicked(event) {
    var button = event.target // when we add to cart - which function we click
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('targetH3NameTitle').innerText
    var price = shopItem.getElementsByClassName('targetH4Price').innerText
    var imageSrc = shopItem.getElementsByClassName('targetImage').src
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

// next function -show the add item in the cart

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')

    //below if item in the cart
    var cartItems = document.getElementsByClassName('cart-items')[0]

   //check if the tilte already exist in the shopping cart
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
        //everytime click add to cart it will add row on the screen
cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('removeButton')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

//remove from cart function

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

//update cart 


