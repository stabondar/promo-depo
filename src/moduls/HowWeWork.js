import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

import Experience from '../Experience'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default class HowWeWork
{
    constructor()
    {
        let mm = gsap.matchMedia()
        let isDesktop = '(min-width: 991px)'

        let section = $('.work__body')
        let sectionTitle = section.find('.section-title')
        let title = section.find('h2')
        let divider = section.find('.section-title__divider')
        let tl = gsap.timeline({ scrollTrigger: {trigger: sectionTitle, start: 'top 20%', end: 'top top', scrub: 1}, defaults: {ease: 'none'} })

        const experience = new Experience()
        const lenis = experience.scroll.lenis

        mm.add(isDesktop, () => 
        {
            tl.to(title, {transformOrigin: 'left bottom', scale: 0.35})
            .to(divider, {width: '94.8em'}, '<')

            this.scrollSections(section)
            this.scrollToAnchors(lenis)
            this.hoverTiles()
        })
    }
    
    scrollSections(section) 
    {
        let list = $('.work__list')
        let firstItem = section.find('.work__item').eq(0)
        let featureItem = firstItem.find('.work__features--item')
        let secondItem = section.find('.work__item').eq(1)
        let thirdItem = section.find('.work__item').eq(2)
        let featureTl = gsap.timeline({scrollTrigger: 
            {trigger: section, start: 'top top', end: 'top -200%', scrub: true}, 
            defaults: {duration: 3, ease:'none'}
        })  
        
        featureTl.fromTo(featureItem, {minWidth: '100%'}, {minWidth: 'calc(33.33% - 0.52em)', stagger: {amount: 3}})
        
        let secondSectionTl = gsap.timeline({scrollTrigger: 
            {trigger: section, start: 'top -200%', end: 'top -300%', scrub: true}, 
            defaults: {ease:'none'},
        })
        secondSectionTl.to(secondItem, {y: 0})

        let thirdSectionTl = gsap.timeline({scrollTrigger: 
            {trigger: section, start: 'top -300%', end: 'bottom bottom', scrub: true}, 
            defaults: {ease:'none'}
        })
        thirdSectionTl.to(thirdItem, {y: 0})

        let showSecondSectionTl = gsap.timeline({scrollTrigger: 
            {trigger: section, start: 'top top', end: 'top -10%', scrub: true}, 
            defaults: {ease:'none'}
        })
        showSecondSectionTl.to(secondItem, {y: '100vh'})

        let showThirdSectionTl = gsap.timeline({scrollTrigger: 
            {trigger: section, start: 'top -200%', end: 'top -210%', scrub: true}, 
            defaults: {ease:'none'}
        })
        showThirdSectionTl.to(thirdItem, {y: '100vh'})
    }
    
    scrollToAnchors(lenis)
    {
        let nextFirst = $('.work__next--btn').eq(0).find('.btn')
        let nextSecond = $('.work__next--btn').eq(1).find('.btn')
        
        nextFirst.on('click', () => lenis.scrollTo('.work__anchor.is--1', {duration: 1}))
        nextSecond.on('click', () => lenis.scrollTo('.work__anchor.is--2', {duration: 1}))
    }

    hoverTiles()
    {
        let item = $('.work__features--item')
        $(item).each(function()
        {
            let self = $(this)
            let descr = self.find('.work__features--descr').find('.f--24')
            let absoluteTitle = self.find('.work__feature--title').eq(1).find('.f--32')
            let staticTitle = self.find('.work__feature--title').eq(0).find('.f--32')

            let descrSplit = new SplitText(descr, {type: 'lines'})
            let absoluteTitleSplit = new SplitText(absoluteTitle, {type: 'lines'})
            let staticTitleSplit = new SplitText(staticTitle, {type: 'lines'})

            gsap.set([descrSplit.lines, absoluteTitleSplit.lines, staticTitleSplit.lines], {overflow: 'hidden'})
            gsap.set(staticTitleSplit.lines, {paddingRight: 10})
            gsap.set([absoluteTitleSplit.lines, staticTitleSplit.lines], {paddingBottom: 3})

            let descrSplitSecond = new SplitText(descrSplit.lines, {type: 'lines'})
            let absoluteTitleSplitSecond = new SplitText(absoluteTitleSplit.lines, {type: 'lines'})
            let staticTitleSplitSecond = new SplitText(staticTitleSplit.lines, {type: 'lines'})

            let tl = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power3', stagger: 0.1}})

            tl.to(absoluteTitleSplitSecond.lines, {yPercent: 100, opacity: 0, stagger: {from: 'end', each: 0.1}})
            .from(staticTitleSplitSecond.lines, {yPercent: -100, opacity: 0, stagger: {from: 'end', each: 0.1}}, '<0.2')
            .from(descrSplitSecond.lines, {yPercent: 100, opacity: 0}, '<')

            self.on('mouseenter', ()=> tl.timeScale(1).play())
            self.on('mouseleave', ()=> tl.timeScale(1.5).reverse())
        })
    }
}