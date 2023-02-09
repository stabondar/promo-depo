import gsap from 'gsap'

export default class ParallaxOnMove
{
    constructor(e, movement, elem)
    {
        let $this = $(e.target)
        let relX = e.pageX - $this.offset().left
        let relY = e.pageY - $this.offset().top
        
        gsap.to( elem, { 
            duration: 0.3,
            x: (relX - $this.width()/2) / $this.width() * movement,
            y: (relY - $this.height()/2) / $this.height() * movement,
            ease: 'power2'
        })
    }
}