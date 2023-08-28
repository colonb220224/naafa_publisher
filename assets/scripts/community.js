
new Swiper('.third .swiper', {
    slidesPerView: 1, // 한 번에 보여 줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백 (10px)
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000 // 5초
    },
    pagination: {
        el: '.third .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 기능 여부
    },
    navigation: {
        prevEl: '.third .swiper-button-prev',
        nextEl: '.third .swiper-button-next'
    }
});