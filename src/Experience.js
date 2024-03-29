import Anchors from './moduls/Anchors'
import Award from './moduls/Award'
import Brief from './moduls/Brief'
import Burger from './moduls/Burger'
import Button from './moduls/Button'
import ChangeColor from './moduls/ChangeColor'
import Cta from './moduls/Cta'
import HowWeWork from './moduls/HowWeWork'
import LargeText from './moduls/LargeText'
import HoverLinks from './moduls/LinksHover'
import ListItem from './moduls/ListItem'
import Loader from './moduls/Loader'
import Popup from './moduls/Popup'
import Privacy from './moduls/Privacy'
import Projects from './moduls/Projects'
import Scroll from './moduls/Scroll'
import Slider from './moduls/Slider'
import Title from './moduls/Title'
import TitleDivider from './moduls/TitleDivider'
import Trail from './moduls/Trail'
import Utils from './moduls/Utils'
import Validate from './moduls/Validate'

let instance = null

export default class Experience 
{
    constructor()
    {
        if(instance) return instance
        instance = this
        
        this.utils = new Utils()
        this.scroll = new Scroll()
        this.burger = new Burger()
        this.changeColor = new ChangeColor()
        this.hoverLinks = new HoverLinks()
        this.title = new Title()
        this.listItem = new ListItem()
        this.validate = new Validate()
        this.button = new Button()
        this.popup = new Popup()
        this.brief = new Brief()
        
        if($('body').attr('page') == 'home') 
        { 
            if($('body').attr('data-short') != 'true') 
            {
                
                this.trail = new Trail() 
                this.largeText = new LargeText()
                this.howwework = new HowWeWork()
            }

            this.award = new Award()
            this.slider = new Slider()
            this.loader = new Loader()
            this.anchors = new Anchors()
            this.cta = new Cta()
            this.titleDivider = new TitleDivider()
            this.projects = new Projects()
        } 

        if($('body').attr('page') == 'privacy') { $('html').addClass('light') }
        if($('body').attr('page') == '404') { $('html').addClass('dark') }
    }
}