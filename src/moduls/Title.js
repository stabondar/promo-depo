import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {SplitText} from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default class Title
{
    constructor()
    {
        let enter = 'top 80%'
        let splitLine, splitWord
        const init = () => 
        {   
            const lineAnimation = () => 
            {
                let item = $('[text-line]')
                splitLine = new SplitText(item, {type: 'lines'})
                $(item).each(function()
                {
                    let self = $(this)
                    let lines = self.find(splitLine.lines)
                    let tl = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power3', stagger: 0.06}})
                    tl.fromTo(lines, {opacity: 0}, {opacity: 1})
    
                    ScrollTrigger.create({
                        trigger: self,
                        start: enter,
                        onEnter: () => tl.play()
                    })

                    ScrollTrigger.create({
                        trigger: self,
                        start: 'top bottom',
                        onEnter: () => tl.pause(0)
                    })

                    ScrollTrigger.create({
                        trigger: self,
                        start: enter,
                        onUpdate: () => tl.play()
                    })
                })
            }
            lineAnimation()
    
            const wordAnimation = () => 
            {
                let item = $('[text-word]')
                splitWord = new SplitText(item, {type: 'words'})
                $(item).each(function()
                {
                    let self = $(this)
                    let word = self.find(splitWord.words)
                    if(self.parent().hasClass('title-indent')) gsap.set(word[0], {textIndent: '16.15vw'})   
                    let tl = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power3', stagger: 0.04}})
                    tl.fromTo(word, {x: -20, opacity: 0}, {x: 0, opacity: 1})
    
                    ScrollTrigger.create({
                        trigger: self,
                        start: enter,
                        onEnter: () => tl.play()
                    })

                    ScrollTrigger.create({
                        trigger: self,
                        start: 'top bottom',
                        onEnter: () => tl.pause(0)
                    })

                    ScrollTrigger.create({
                        trigger: self,
                        start: enter,
                        onUpdate: () => tl.play()
                    })
                })
            }
            wordAnimation()
        }
        
        window.addEventListener('load', () => init())

        let windowWidth = window.innerWidth
        const checkWidth = () => 
        {
            let afterWidth = window.innerWidth
            if (windowWidth !== afterWidth)
            {
                if(splitLine != null) splitLine.revert()
                if(!splitWord != null) splitWord.revert()
                init() 
            }
            windowWidth = window.innerWidth
        }

        function debounce(func) {
            var timer
            return function (event) 
            {
                if (timer) clearTimeout(timer);
                timer = setTimeout(func, 300, event);
            }
        }

        window.addEventListener("resize", debounce(function (e) {checkWidth()}))
    }
}