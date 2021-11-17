const slide1 = document.getElementById("glide_1");
const slide2 = document.getElementById("glide_2");
const slide3 = document.getElementById("glide_3");
const slide4 = document.getElementById("glide_4");

// Hero (Glide Js Carousel)

if(slide1){
    new Glide(slide1,{
        type:'carousel',
        starAt: 0,
        autoplay: 3000,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: "linear",
    }).mount();
}

// Latest Products
if(slide1){
    new Glide(slide2,{
        type:'carousel',
        starAt: 0,
        hoverpause: true,
        autoplay: 4000,
        perView: 4,
        animationDuration: 800,
        animationTimingFunc: "ease-in-out",
        breakpoints:{
            1200:{
                perView: 3,
            },
            768: {
                perView:2,
            }
        },
    }).mount();
}

// Testimonial-----------------------------
if(slide3){
    new Glide(slide3, {
        type:'carousel',
        starAt: 0,
        hoverpause: true,
        autoplay: 4000,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: "ease-in-out",
    }).mount();
}


// News---------------------------------------
if(slide4){
    new Glide(slide4, {
        type:'carousel',
        starAt: 0,
        hoverpause: true,
        autoplay: 3000,
        perView: 3,
        animationDuration: 800,
        animationTimingFunc: "ease-in-out",
        breakpoints:{
            998:{
                perView: 2,
            },
            768: {
                perView: 1,
            }
        },
    }).mount();
}