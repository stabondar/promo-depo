import gsap from 'gsap'

import ParallaxOnMove from './ParallaxOnMove'

export default class Button
{
    constructor()
    {
        let item = $('.btn')
        $(item).each(function()
        {
            let self = $(this)
            let parent = self.parent()

            if(!self.hasClass('is--arrow'))
            {
                parent.on('mousemove', (e) => 
                {
                    const parallax = new ParallaxOnMove(e, 80, self)
                })
    
                parent.on('mouseleave', () => 
                {
                    gsap.to(self, {duration: 0.3, x: 0, y: 0})
                })
            }

        })
            
    }
}