import gsap from 'gsap'

export default class Utils
{
    constructor()
    {
        window.addEventListener('load', () => gsap.set($('main'), {autoAlpha: 1}))

        $('.hero').removeClass('bg--red')
    }
}