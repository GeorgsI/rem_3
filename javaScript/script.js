$(document).ready(function(){

   /* $('.slider-evants').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
    });*/




    $('.slider-evants').slick({
        //dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                   // dots: true
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
                
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
                
            }

        ]
    });


})



let iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
    let bodyMenu = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        bodyMenu.classList.toggle('_active');
    });
}



let menuArrows = document.querySelectorAll('.menu__arrow');
let menuDrops = document.querySelectorAll('.dropdown');
    if(menuDrops.length>0){
        for(let index= 0; index < menuDrops.length; index++){
                let menuDrop = menuDrops[index];
                menuDrop.addEventListener('click', function(e){
                menuDrop.parentElement.classList.toggle('_active');
            });
        }
    }

    


//console.log(rr);


/*document.querySelectorAll('.mainBanne').forEach((item)=>{
   
})*/
//document.querySelector('body').innerHTML=rr[0];
//console.log(rr);
