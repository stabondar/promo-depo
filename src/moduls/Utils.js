import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Utils
{
    constructor()
    {
        window.addEventListener('load', () => 
        {
            gsap.set($('main'), {autoAlpha: 1})
            ScrollTrigger.refresh()
        })

        $('.hero').removeClass('bg--red')
    }
}