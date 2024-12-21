// ----------------- NAV MENU ---------------------
let nav_menu = document.querySelector('nav');
let button_go_to_top = document.querySelector('#btn_top_to_page');
// 1 - Event When Scrolling Up
document.addEventListener('scroll',function(e) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // ----> Dynamically add and remove the active class based on the user's scroll position.
    if(scrollTop > 100){
        nav_menu.classList.add('active');
    }else{
        nav_menu.classList.remove('active');
    }
    
    // ----> Achieve a responsive line on top of the navbar whose width changes when scrolling
    const pageHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / pageHeight) * 100; 
    // Set the line's width based on scroll percentage
    nav_menu.querySelector('.container').style.setProperty('--after-nav-line', scrollPercent + '%');

    // ----> Show the button go_to_top when scrolling beyond the viewport height
    
    if(scrollTop > window.innerHeight){
        button_go_to_top.classList.add('show');
    }else{
        button_go_to_top.classList.remove('show');
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

// ----------- GLOBALS -----------
// ----->  Appears after scrolling and, when clicked, scrolls back to the top.
if(button_go_to_top){
    button_go_to_top.addEventListener('click',function(e){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
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












$('.best_seller_section .boxes_products').slick({
    slidesToShow: 4,         // Show 3 slides at once
    slidesToScroll: 1,       // Scroll 1 slide at a time
    autoplay: false,          // Enable autoplay
    autoplaySpeed: 3000,     // Slide change every 3 seconds
    arrows: true,            // Show next/prev arrows
    dots: true,              // Show pagination dots
    responsive: [
      {
        breakpoint: 1024,    // Tablet size
        settings: {
          slidesToShow: 3,   // Show 2 slides at a time
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 981,     // Mobile size
        settings: {
          slidesToShow: 2,   // Show 1 slide at a time
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,     // Mobile size
        settings: {
          slidesToShow: 1,   // Show 1 slide at a time
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.latest_book_reviews .boxes').slick({
    slidesToShow: 3,         // Show 3 slides at once
    slidesToScroll: 1,       // Scroll 1 slide at a time
    autoplay: false,          // Enable autoplay
    autoplaySpeed: 3000,     // Slide change every 3 seconds
    arrows: true,            // Show next/prev arrows
    // dots: true,              // Show pagination dots
    responsive: [
      {
        breakpoint: 1024,    // Tablet size
        settings: {
          slidesToShow: 2,   // Show 2 slides at a time
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,     // Mobile size
        settings: {
          slidesToShow: 1,   // Show 1 slide at a time
          slidesToScroll: 1
        }
      }
    ]
  });