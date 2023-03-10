import Swiper from 'swiper'
import 'swiper/css'

export default class Slider 
{
    constructor()
    {
        let sliderLengthText = $('.projects__counter').find('p').eq(2)
        let sliderActiveText = $('.projects__counter').find('p').eq(0)
        let swiper = new Swiper(".projects__right", 
        {
            loop: true,
            slidesPerView: "auto",
            keyboard: true,
            direction: "horizontal",
            speed: 200,
            touchEventsTarget: "container",
            freeMode: false,
            grabCursor: true,
            mousewheel: {
                forceToAxis: true
            },
        })

        let sliderLength = swiper.slides.length / 2 - 3.5
        sliderLengthText.text(`0${sliderLength}`)

        let sliderActive = swiper.activeIndex
        sliderActiveText.text(`0${sliderActive}`)
        swiper.on('slideChange', () => 
        {
            sliderActive = swiper.activeIndex
            if(sliderActive > sliderLength)
            {
                sliderActive = sliderActive - sliderLength
            } 
            sliderActiveText.text(`0${sliderActive}`)
        })

        $('.projects__arrow').eq(1).on('click', () =>
        {
            swiper.slideNext()
        })

        $('.projects__arrow').eq(0).on('click', () =>
        {
            swiper.slidePrev()
        })

        swiper.slideTo(1)
    }
}