import gsap from 'gsap'

export default class CloseButtonHover
{
    constructor(elem)
    {
        let tl = gsap.timeline({paused: true})

        tl.to(elem, {rotate: 3 * 180, duration: 1.4})

        elem.on('mouseenter', () => tl.restart())
    }
}