import Experience from '../Experience'

export default class Anchors
{
    constructor()
    {
        this.experience = new Experience()
        let scroll = this.experience.scroll.lenis

        $('.nav__item').eq(0).on('click', () => scroll.scrollTo('.help'))
        $('.nav__item').eq(1).on('click', () => scroll.scrollTo('.focus'))
        $('.nav__item').eq(2).on('click', () => scroll.scrollTo('.projects'))
        $('.nav__logo').on('click', () => scroll.scrollTo('header'))
    }
}