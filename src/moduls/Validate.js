import "https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"
import jqueryValidate from 'jquery-validation/dist/jquery.validate.js'

export default class Validate 
{
    constructor()
    {

        $('form').validate(
        {
            rules: 
            {
                name: {
                    required: true,
                    minlength: 2
                }
            }
        })

        $('[type="submit"]').each(function()
        {
            let self = $(this)
            let form = self.closest('form')

            self.on('click', () => form.valid())
        })
    }
}