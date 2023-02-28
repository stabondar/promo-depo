export default class Cta
{
    constructor()
    {
        let field = $('.form__input')
        $(field).each(function()
        {
            let self = $(this)
            let label = self.siblings('.is--label')
            let border = self.siblings('.white')

            self.on('focusin', () =>
            {
                label.addClass('focus')
                border.addClass('focus')  
            })

            self.on('focusout', () => 
            {
                if(self.val().length == 0)
                {
                    label.removeClass('focus')
                    border.removeClass('focus')   
                }
            })
        })
    }
}