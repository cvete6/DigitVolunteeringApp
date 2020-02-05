import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from "../Menu/Menu";
import VolnterStory from "../VolnterStory";
import Footer from "../Footer";

class StoryPage extends Component{
    render() {
        return(
            <div>
                <Menu/>
                <VolnterStory/>
                <Footer/>
            </div>
        )
    }
}

export default StoryPage;