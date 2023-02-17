import gsap from 'gsap'

export default class Award
{
    constructor()
    {
        let item = $('.award__table')
        $(item).each(function()
        {
            let self = $(this)
            let img = self.find('.award__img')

            let mouse = {x: 0, y: 0}
            let x, y, offsetX, offsetY
            let moveX = self.width()
            let moveY = self.height()
            self.on('mousemove', (e) =>
            {
                mouse.x = e.clientX - self[0].getBoundingClientRect().left
                mouse.y = e.clientY - self[0].getBoundingClientRect().top
                x = (mouse.x - $(self).width()/2) / $(self).width() * (moveX * 0.9) 
                y = (mouse.y - $(self).height()/2) / $(self).height() * (moveY * 0.8)

                let rotate = x / $(self).width() * 15
    
                gsap.to( img, { duration: 0.4, x: x, y: y, ease: 'power2', rotate: rotate })
            })
        })
    }
}