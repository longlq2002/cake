/*=================================================================
                    NAV STARTS                                 
=================================================================*/
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
/*=================================================================
                    NAV ENDS                               
=================================================================*/





/*=================================================================
                    SIDER (HOME) STARTS                                 
=================================================================*/
var slideIndex = 1;
showSlider(slideIndex);

function plusSlider(n) {
showSlider(slideIndex += n);
}

function currentSlider(n) {
showSlider(slideIndex = n);
}

function showSlider(n) {
    var i;
    var slider = document.getElementsByClassName("mySlider");
    var dots = document.getElementsByClassName("dot");
    if (n > slider.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slider.length}
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slider[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
/*=================================================================
                        SIDER (HOME) ENDS                               
=================================================================*/




/*=================================================================
                REVIEW STARTS                                 
=================================================================*/
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
})
/*=================================================================
                REVIEW ENDS                                 
=================================================================*/




/*=================================================================
                GALLERY STARTS                                 
=================================================================*/
var swiper = new Swiper(".gallery-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
})
/*=================================================================
                GALLERY ENDS                                 
=================================================================*/
