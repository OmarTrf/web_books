// Show / Hide The Menu List Of Cart
let cart_icon = document.querySelector('nav .icons .cart_book');
let wish_icon = document.querySelector('nav .icons .cart_wishlist');
let list_cart = document.querySelector('nav .icons .list_menu');

if(cart_icon && wish_icon && list_cart){
    cart_icon.addEventListener('click', function(e){
        e.preventDefault();
        cart_icon.classList.toggle('active');
        wish_icon.classList.remove('active');

        if(!list_cart.classList.contains('cart-active')){
            list_cart.classList.add('active', 'cart-active');
            list_cart.classList.remove('wishlist-active');
        }else{
            list_cart.classList.remove('active', 'cart-active');
        }

    });

    wish_icon.addEventListener('click', function(e){
        e.preventDefault();
        wish_icon.classList.toggle('active');
        cart_icon.classList.remove('active');

        if(!list_cart.classList.contains('wishlist-active')){
            list_cart.classList.add('active','wishlist-active');
            list_cart.classList.remove('cart-active');
        }else{
            list_cart.classList.remove('active','wishlist-active');
        }

    });
}