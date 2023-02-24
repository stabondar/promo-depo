import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import Experience from '../Experience'
import Delay from './Delay'

export default class Burger
{
    constructor()
    {   
        let mm = gsap.matchMedia()
        let isDesktop = "(min-width: 991px)"
        let isMobile = "(max-width: 991px)"

        const addDeleys = new Delay($('.nav__item, .nav__cta'))
        $('body').addClass('at-top')

        const burgerClick = () =>
        {
            let burger = $('.nav__burger')
            let burgerParent = $('.nav__body')
            let line0 = $('.nav__burger--line').eq(0)
            let line1 = $('.nav__burger--line').eq(1)
            let burgerItem = $('.nav__item')
            let tl = gsap.timeline({paused: true, defaults: {ease: 'power2', duration: .8}})

            tl.to(burger, {rotate: 3 * 180, duration: 1.4})
            .to([line0, line1], {y: 0}, '<')
            .to(line0, {rotate: 45}, '<')
            .to(line1, {rotate: -45}, '<')

            mm.add(isDesktop, () => 
            {
                burger.on('mouseenter', () => { tl.play(), burgerParent.addClass('open') })
                burgerParent.on('mouseleave', () => { tl.timeScale(1.5).reverse(), burgerParent.removeClass('open') })
            })

            mm.add(isMobile, () => 
            {
                burger.on('click', () => 
                { 
                    if(!burgerParent.hasClass('open'))
                    {
                        tl.timeScale(1).play()
                    } else
                    {
                        tl.timeScale(1.5).reverse()
                    }

                    burgerParent.toggleClass('open')
                })

                burgerItem.on('click', () => { 
                    tl.timeScale(1.5).reverse() 
                    burgerParent.toggleClass('open')
                })
            })
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