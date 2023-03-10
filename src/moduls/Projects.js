import gsap from 'gsap'

export default class Projects
{
    constructor()
    {
        let item = $('.projects__item')
        $(item).each(function()
        {
            let self = $(this)
            let img = self.find('.projects__item--img')
            let radius = img.width()

            let tl = gsap.timeline({paused: true, defaults: {duration: 0.3, ease: 'none'}})

            tl.to(img, {borderRadius: radius})

            self.on('mouseenter', () => tl.play())
            self.on('mouseleave', () => tl.timeScale(1.5).reverse())
        })
    }
}