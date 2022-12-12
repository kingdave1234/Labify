var swiper = new Swiper(".mySwiper",{
    slidesPerView:3,
    spacesBetween:30,
    slidesPerGroup:3,
    loop:true,
    loopFillGroupWithBlank:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swipper-button-next",
        prevEl:".swiper-button-prev",
    },
});