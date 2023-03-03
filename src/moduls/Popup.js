import Experience from "../Experience"
import CloseButtonHover from "./CloseButtonHover"

export default class Popup
{
    constructor()
    {
        this.app = new Experience()
        let scroll = this.app.scroll.lenis

        let popup = $('.popup')
        let trigger = $('[popup="popup"]')
        let body = $('body')
        let close = popup.find('.popup__close')
        let className = 'popup-visible'

        trigger.on('click', () => 
        {
            body.addClass(className)
            scroll.stop()
        })
        close.on('click', () => 
        {
            body.removeClass(className)
            scroll.start()
        })

        const hoverClose = new CloseButtonHover(close)
    }
}