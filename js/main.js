

let dropdowmMenu = document.querySelector(".nav__dropdown-menu ");
document.addEventListener("click", function (event) {
    if (event.target.closest('.main__menu-item-work') ) {
    dropdowmMenu.classList.toggle('opened');
} 
    if (!event.target.closest('.main__menu-item-work') ) {
    dropdowmMenu.classList.remove('opened');
} 
});




let burger = document.querySelector(".header_menu-burger");
let menu = document.querySelector(".burger__nav");
if (burger) {
    burger.addEventListener( "click", function(e) {
        burger.classList.toggle('active')
        menu.classList.toggle('active')
        document.body.classList.toggle('lock'); 

         
});
};


let menuLinks = document.querySelectorAll(".main__menu-item");
if ( menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", function (e) {
            if (burger.classList.contains('active')) {
                burger.classList.remove('active');
                menu.classList.remove('active'); 
                document.body.classList.toggle('lock'); 
            }
        
            
        } );
    });
    
};



let footerMenu1 = document.querySelector(".footer__menu-pages")
let menuList1 = document.querySelector(".menu-pages__list")
footerMenu1.addEventListener("click", function () {
    
    menuList1.classList.toggle('open');  
    footerMenu1.classList.toggle('arrow');

});
let footerMenu2 = document.querySelector(".footer__menu-cms-pages")
let menuList2 = document.querySelector(".menu-Cms-pages__list")
footerMenu2.addEventListener("click", function () {
    menuList2.classList.toggle('open');
    footerMenu2.classList.toggle('arrow');
    
    
});

let footerMenu3 = document.querySelector(".footer__menu-Utility-pages")
let menuList3 = document.querySelector(".menu-Utility-pages__list")
footerMenu3.addEventListener("click", function () {
    menuList3.classList.toggle('open');   
  footerMenu3.classList.toggle('arrow');
});





























