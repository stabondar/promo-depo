import Anchors from './moduls/Anchors'
import Award from './moduls/Award'
import Burger from './moduls/Burger'
import Button from './moduls/Button'
import ChangeColor from './moduls/ChangeColor'
import Cta from './moduls/Cta'
import HowWeWork from './moduls/HowWeWork'
import LargeText from './moduls/LargeText'
import HoverLinks from './moduls/LinksHover'
import ListItem from './moduls/ListItem'
import Loader from './moduls/Loader'
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
        this.trail = new Trail()
        this.scroll = new Scroll()
        this.burger = new Burger()
        this.loader = new Loader()
        this.changeColor = new ChangeColor()
        this.hoverLinks = new HoverLinks()
        this.title = new Title()
        this.titleDivider = new TitleDivider()
        this.listItem = new ListItem()
        this.slider = new Slider()
        this.cta = new Cta()
        this.validate = new Validate()
        this.anchors = new Anchors()
        this.button = new Button()
        this.howwework = new HowWeWork()
        this.award = new Award()
        this.largeText = new LargeText()
    }
}