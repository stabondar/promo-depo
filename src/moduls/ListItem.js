import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class ListItem
{
    constructor()
    {
        let enter = 'top 80%'
        const listAnimation = (trigger, items) =>
        {
            let tlList = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power3'}})
            tlList.fromTo(items, {opacity:0},{opacity: 1, stagger: 0.1})

            ScrollTrigger.create({
                trigger: trigger,
                start: enter,
                onEnter: () => tlList.play()
            })

            // ScrollTrigger.create({
            //     trigger: trigger,
            //     start: 'top bottom',
            //     onEnter: () => tlList.pause(0)
            // })

            ScrollTrigger.create({
                trigger: trigger,
                start: enter,
                onUpdate: () => tlList.play()
            })
        } 

        let socialParent = $('.projects__title--list')
        $(socialParent).each(function()
        {
            let self = $(this)
            let socialItems = self.find('.projects__title--item')
            listAnimation(self, socialItems)
        })
        
        let focusRow = $('.focus__row')
        $(focusRow).each(function()
        {
            let self = $(this)
            let item = self.find('.focus__item')
            listAnimation(self, item)
        })

        let helpList = $('.help__list')
        $(helpList).each(function()
        {
            let self = $(this)
            let item = self.find('.help__item')
            listAnimation(self, item)
        })
    }
}