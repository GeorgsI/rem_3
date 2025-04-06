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







//console.log(rr);


/*document.querySelectorAll('.mainBanne').forEach((item)=>{
   
})*/
//document.querySelector('body').innerHTML=rr[0];
//console.log(rr);
