// function openCart(){
// // document.getElementById("controlOpenCart").style.width="30%";
// alert("hey")

// }




// if the page load and then we go to ready state function
if (document.readyState=="loading"){
   document.addEventListener("DOMContentLoaded",ready)
}else{
ready()
}


// when page ready and page is setup
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





}