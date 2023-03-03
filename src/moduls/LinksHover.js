import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export default class HoverLinks 
{
    constructor()
    {
        let mm = gsap.matchMedia()
        let isDesktop = '(min-width: 991px)'

        const linkEffect = (parent, text, fontStyle, left, right) =>
        {
            let copy = text.clone().appendTo(parent).removeAttr('text-word')
            gsap.set(copy, {position: 'absolute', top: 0, right: right, left: left, fontStyle: fontStyle, zIndex: 0, width: 'max-content'})

            let textSplit = new SplitText(text, {type: 'chars'})
            let copySplit = new SplitText(copy, {type: 'chars'})

            let tl = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power2', stagger: 0.04}})
            tl.to(textSplit.chars, {opacity: 0})
            .from(copySplit.chars, {opacity: 0}, '<0.4')

            mm.add(isDesktop, () =>
            {
                parent.on('mouseenter', () => tl.play())
                parent.on('mouseleave', () => tl.timeScale(1.5).reverse())
            })
        }

        let navItem = $('.nav__list').find('a')
        $(navItem).each(function()
        {
            let self = $(this)
            let text = self.find('.f--24')
            linkEffect(self, text, 'italic', 'auto', 0)
        })

        let socialItem = $('a.projects__title--item')
        $(socialItem).each(function()
        {
            let self = $(this)
            let text = self.find('.f--84')
            linkEffect(self, text, 'normal', 0, 'right')
        })

        let email = $('a.footer__title')
        $(email).each(function()
        {
            let self = $(this)
            gsap.set(self, {position: 'relative'})
            let text = self.find('.f--128')
            linkEffect(self, text, 'normal', 0, 'right')
        })

        let copy = $('a.footer__copy')
        $(copy).each(function()
        {
            let self = $(this)
            gsap.set(self, {position: 'relative'})

            let text = self.find('.f--32')
            linkEffect(self, text, 'normal', 'auto', 0)
        })

        let navScroll = $('.nav__srroll--cta').find('.nav__cta')
        $(navScroll).each(function()
        {
            let self = $(this)
            gsap.set(self, {position: 'relative'})
            let text = self.find('.f--24')
            linkEffect(self, text, 'italic', 'auto', 0)
        })
    }
}