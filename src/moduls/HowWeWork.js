import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Experience from '../Experience'

gsap.registerPlugin(ScrollTrigger)

export default class HowWeWork
{
    constructor()
    {
        let section = $('.work__body')
        let sectionTitle = section.find('.section-title')
        let title = section.find('h2')
        let divider = section.find('.section-title__divider')
        let tl = gsap.timeline({ scrollTrigger: {trigger: sectionTitle, start: 'top 20%', end: 'top top', scrub: 1}, defaults: {ease: 'none'} })

        tl.to(title, {transformOrigin: 'left bottom', scale: 0.35})
        .to(divider, {width: '94.8em'}, '<')

        const experience = new Experience()
        const lenis = experience.scroll.lenis

        this.scrollSections(section)
        this.scrollToAnchors(lenis)
    }
    
    scrollSections(section) 
    {
        let firstItemSection = section.find('.work__item').eq(0)
        let featureItem = firstItemSection.find('.work__features--item')
        let secondItem = section.find('.work__item').eq(1)
        let thirdItem = section.find('.work__item').eq(2)
        let featureTl = gsap.timeline({scrollTrigger: {trigger: section, start: 'top top', end: 'top -200%', scrub: true}, defaults: {duration: 3, ease:'none'}})
        
        featureTl.fromTo(featureItem, {minWidth: '100%'}, {minWidth: 'calc(33.33% - 0.52em)', stagger: {amount: 3}})
        .to(secondItem, {y: '100vh', duration: 0.6}, '<')

        let secondSectionTl = gsap.timeline({scrollTrigger: {trigger: section, start: 'top -200%', end: 'top -300%', scrub: true}, defaults: {ease:'none'}})
        secondSectionTl.to(secondItem, {y: 0})
        .to(thirdItem, {y: '100vh', duration: 0.6}, '<')

        let thirdSectionTl = gsap.timeline({scrollTrigger: {trigger: section, start: 'top -300%', end: 'bottom bottom', scrub: true}, defaults: {ease:'none'}})
        thirdSectionTl.to(thirdItem, {y: 0})
    }
    
    scrollToAnchors(lenis)
    {
        let nextFirst = $('.work__next--btn').eq(0).find('.btn')
        let nextSecond = $('.work__next--btn').eq(1).find('.btn')
        
        nextFirst.on('click', () => lenis.scrollTo('.work__anchor.is--1', {duration: 1}))
        nextSecond.on('click', () => lenis.scrollTo('.work__anchor.is--2', {duration: 1}))
    }
}
// this.showNext()

// const showNext = () => 
// {
//     let nextBunner = $('.work__next')
//     let nextTl = gsap.timeline({scrollTrigger: {trigger: sectionTitle, start: 'top 20%', end: 'top top', scrub: 1}})

//     nextTl.from(nextBunner, {yPercent: 100})
// }
// showNext()