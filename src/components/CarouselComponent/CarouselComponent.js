import React from "react";
import { Carousel } from "react-responsive-carousel";
import volunteeringImg1 from '../../assets/images/iStock-1145183123.jpg'
import volunteeringImg2 from '../../assets/images/microvolunteering-making-a-difference-in-a-matter-of-minutes-588a3926ecd2b.jpeg'
import volunteeringImg3 from '../../assets/images/1_tKw-v0X5-U9qLtTXqkFbFg.jpeg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent.css'
import SearchBar from "../SearchBar/SearchBar";


function CarouselComponent(props) {
    return <div className={"content-position"}>
        <Carousel autoPlay={true} showIndicators={false} showArrows={false} width={"100%"} showThumbs={false}>
            <div>
                <img src={volunteeringImg1}/>
            </div>
            <div>
                <img src={volunteeringImg2}/>
            </div>
            <div>
                <img src={volunteeringImg3}/>
            </div>
        </Carousel>
        <span className="centered">
            <SearchBar searchByLocation={props.searchByLocation}/>
        </span>
    </div>
}

export default CarouselComponent;