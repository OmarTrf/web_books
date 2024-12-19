// ----------------- NAV MENU ---------------------
let nav_menu = document.querySelector('nav');

// 1 - dynamically add and remove the active class based on the user's scroll position.
document.addEventListener('scroll',function(e) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > 220){
        nav_menu.classList.add('active');
    }else{
        nav_menu.classList.remove('active');
    }
});

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







let search_boxes = document.querySelectorAll('.search_box');

// SEARCHE BOXE 
// 1 - Button Select Category
search_boxes.forEach(search_box=>{
    if(search_box){
        let button_main_category = search_box.querySelector('.select_box .main_item');
        let menu = search_box.querySelector('.select_box .menu');
    
        button_main_category.addEventListener('click', function(e){
            e.preventDefault();
            menu.classList.toggle('active');
        });
    }
})