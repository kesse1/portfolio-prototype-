import Home from "../PorfolioContainer/Home/Home";
import AboutMe from "../PorfolioContainer/AboutMe/AboutMe";
import Resume from "../PorfolioContainer/Resume/Resume";
import Testimonial from '../PorfolioContainer/Testimonial/Testimonial'
import ContactMe from "../PorfolioContainer/ContactMe/ContactMe";
import Footer from "../PorfolioContainer/Footer/Footer";


export const TOTAL_SCREENS =[
    {
        screen_name:'Home',
        component: Home,
    },
    {
        screen_name:'AboutMe',
        component: AboutMe,
    },
    {
        screen_name:'Resume',
        component: Resume,
    },
    {
        screen_name:'Testimonial',
        component:Testimonial,
    },
    {
        screen_name:'ContactMe',
        component:ContactMe,
    },
    
   {component:Footer}
    
];


export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) return -1;
  
    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
      if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
  
    return -1;
  };