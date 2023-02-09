import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import Delay from './Delay'

export default class Burger
{
    constructor()
    {
        const addDeleys = new Delay($('.nav__item, .nav__cta'))
        $('body').addClass('at-top')

        const burgerClick = () =>
        {
            let burger = $('.nav__burger')
            let burgerParent = $('.nav__burger--parent')
            let line0 = $('.nav__burger--line').eq(0)
            let line1 = $('.nav__burger--line').eq(1)
            let tl = gsap.timeline({paused: true, defaults: {ease: 'power2', duration: .8}})

            tl.to(burger, {rotate: 3 * 180, duration: 1.4})
            .to([line0, line1], {y: 0}, '<')
            .to(line0, {rotate: 45}, '<')
            .to(line1, {rotate: -45}, '<')

            burger.on('mouseenter', () => { tl.play(), burgerParent.addClass('open') })
            burgerParent.on('mouseleave', () => { tl.timeScale(1.5).reverse(), burgerParent.removeClass('open') })
        }
        burgerClick()

        ScrollTrigger.create(
        {
            trigger: 'body', start: 'top top', end: '300 top',
            onLeave: () => $('body').removeClass('at-top'),
            onEnterBack: () => $('body').addClass('at-top'),
        })
    }
}