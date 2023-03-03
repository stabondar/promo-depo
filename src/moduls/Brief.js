import gsap from 'gsap'

import Experience from "../Experience"
import CloseButtonHover from './CloseButtonHover'


export default class Brief
{
    constructor()
    {
        let mm = gsap.matchMedia()
        let isMobile = '(max-width: 991px)'
        let isDesktop = '(min-width: 991px)'

        let brief = $('.brief')
        let steps = brief.find('.form__step')
        let stepsParent = brief.find('.form__steps--parent')
        let next = brief.find('.form__next')
        let prev = brief.find('.form__back')
        let title = brief.find('.brief__descr')
        let indexParent = brief.find('.form__index--parent')
        let indexList = brief.find('.form__index--list')
        let length = steps.length
        let nextText = next.find('p')
        let activeClass = 'active'

        steps.removeClass('hide')
        steps.eq(0).add(title).addClass(activeClass)

        let activeStep = brief.find('.form__step.active')
        let activeIndex

        const changeStepHeight = (thisHeight) => 
        {
            gsap.to(stepsParent, {height: thisHeight, duration: 0.3})
        }

        const clickNext = () => 
        {
            activeStep = brief.find('.form__step.active')
            activeIndex = activeStep.index()
            
            if(activeIndex != length - 1)
            {
                steps.removeClass(activeClass)
                steps.eq(activeIndex + 1).addClass(activeClass)
                let thisHeight = steps.eq(activeIndex + 1).outerHeight()

                prev.addClass(activeClass)
                title.removeClass(activeClass)

                gsap.to(indexList, {y: (activeIndex + 1) * indexParent.height()})

                mm.add(isDesktop, () => changeStepHeight(thisHeight))
            }
            
            if(activeIndex + 1 == length - 1) 
            {
                next.addClass(activeClass)
                nextText.text('Send')
            }

            
            mm.add(isMobile, () => document.querySelector('.brief').scrollTo({top: 0, behavior: 'smooth'}))
        }

        const clickPrev = () => 
        {
            activeStep = brief.find('.form__step.active')
            activeIndex = activeStep.index()

            if(activeIndex != 0)
            {
                steps.removeClass(activeClass)
                steps.eq(activeIndex - 1).addClass(activeClass)
                let thisHeight = steps.eq(activeIndex - 1).outerHeight()

                next.removeClass(activeClass)

                gsap.to(indexList, {y: (activeIndex - 1) * indexParent.height()})
                nextText.text('Next')

                if(activeIndex == 1)
                {
                    prev.removeClass(activeClass)
                    title.addClass(activeClass)
                }

                mm.add(isDesktop, () => changeStepHeight(thisHeight))
                mm.add(isMobile, () => document.querySelector('.brief').scrollTo({top: 0, behavior: 'smooth'}))
            } 
        }

        /**
         * Change Height When Open popup
         */
        let openTrigger = $('[popup="brief"]')
        openTrigger.on('click', () =>
        {
            let thisHeight = brief.find('.form__step.active').outerHeight()
            mm.add(isDesktop, () => changeStepHeight(thisHeight))
        })

        next.on('click', () => clickNext())
        prev.on('click', () => clickPrev())


        this.app = new Experience()
        let scroll = this.app.scroll.lenis

        let trigger = $('[popup="brief"]')
        let body = $('body')
        let close = brief.find('.brief__close')
        let classNameBody = 'brief-visible'
        let successBtn = brief.find('.brief__success').find('.btn')

        trigger.on('click', () => 
        {
            body.addClass(classNameBody)
            scroll.stop()
        })
        close.add(successBtn).on('click', () => 
        {
            body.removeClass(classNameBody)
            scroll.start()
        })

        const hoverClose = new CloseButtonHover(close)
    }
}