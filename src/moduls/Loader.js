import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

import Experience from '../Experience'

export default class Loader 
{
    constructor()
    {
        this.experience = new Experience()
        this.scroll = this.experience.scroll.lenis

        const start = () => $('body').addClass('loading')
        
        let navParent = $('.nav')
        let hero = $('.hero').eq(0)
        let loader = $('.loader')
        let logos = $('.loader__logo')
        let centerLogo = $('.loader__logo.is--center')
        let nav = $('.nav__burger--parent')
        let navLogo = $('.nav__logo')
        let heroLogo = $('.hero__logo')
        let title = $('.hero__title').find('.f--128')
        let botItem = $('.hero__bot--item').find('.f--96')
        let split = new SplitText(title, {type: 'chars, words'})
        let splitBot = new SplitText(botItem, {type: 'chars, words'})
        let tl = gsap.timeline({defaults: { ease: 'power2', duration: 0.6}, onStart: () => {start(), this.scroll.stop()}})

        const hideLoader = () => loader.css('display', 'none')
        const allowScroll = () => $('body').removeClass('loading')

        tl.to(centerLogo, {opacity: 1})
        .to(logos, {opacity: 1, stagger: {from: 'center', each: 0.02}}, '<0.2')
        .to(navParent, {zIndex: 2, duration: 0}, '<')
        .fromTo(centerLogo, {clipPath: 'circle(100% at 50% 50%)'}, {clipPath: 'circle(0% at 50% 50%)'})
        .fromTo(hero, {clipPath: 'circle(0% at 50% 50%)'}, {clipPath: 'circle(120% at 50% 50%)', duration: 1, onComplete: () => {hideLoader(), allowScroll(), this.scroll.start()}})
        .from(split.chars, {x: '-1rem', opacity: 0, stagger: 0.02}, '<0.1')
        .from(splitBot.chars, {x: '-1rem', opacity: 0, stagger: 0.02}, '<0.1')
        .from(nav, {opacity: 0}, '<0.2')
        .to(heroLogo, {opacity: 0, duration: 0})
        .to(navLogo, {opacity: 1, duration: 0}, '<')
        .to('header', {backgroundColor: 'transparent', duration: 0}, '<')
    }
}