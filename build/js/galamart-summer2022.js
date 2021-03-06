const swiperSummer2022 = new Swiper('.swiper-summer2022', {
    slidesPerView: 4,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        }


    }
});

const swiperSummer2022Poster = new Swiper('.swiper-summer2022-poster', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
    },
});

const swiperSummer2022Main = new Swiper('.swiper-summer2022-main', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-summer-next',
        prevEl: '.swiper-summer-prev',
    },
});

