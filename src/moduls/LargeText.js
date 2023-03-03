import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default class LargeText
{
    constructor()
    {
        let section = $('.large-text__body')
        let textParent = section.find('.large-text__parent')
        let text = textParent.find('.f--440')
        let split = new SplitText(text, {type: 'chars'})

        let tlHorizontal = gsap.timeline(
        {
            scrollTrigger: { trigger: section, start: 'top 25%', end: 'bottom bottom', scrub: true },
            defaults: {ease: 'none'}
        })
        let tlChars = gsap.timeline(
        {
            scrollTrigger: { trigger: section, start: 'top 75%', end: 'top -325%', scrub: true },
            defaults: {ease: 'none', duration: 4}
        })

        let xMove = - $(textParent).width() + ($(section).width() * 0.7)
        tlHorizontal.to(textParent, {x: xMove})

        let charLength = split.chars.length
        let charDuration = charLength * 0.2
        let charStagger = charDuration * 0.2

        tlChars.from(split.chars, 
        {
            opacity: 0, ease: 'none', yPercent: 100, duration: charDuration, stagger: charStagger
        })

        if(window.innerWidth > 768)
        {
            window.addEventListener('resize', () => ScrollTrigger.refresh())
        }
    }
}