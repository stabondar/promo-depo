import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class TitleDivider 
{
    constructor()
    {
        let enter = 'top 80%'
        let divider = $('.section-title__divider')
        $(divider).each(function()
        {
            let self = $(this)
            let parent = self.parent()
            let tl = gsap.timeline({paused: true})
            tl.fromTo(self, {scaleX: 0}, {transformOrigin: 'left', scaleX: 1, duration: 0.8, ease: 'power3'})

            ScrollTrigger.create({
                trigger: parent,
                start: enter,
                onEnter: () => tl.play()
            })

            ScrollTrigger.create({
                trigger: parent,
                start: 'top bottom',
                onEnter: () => tl.pause(0)
            })
        })
    }
}