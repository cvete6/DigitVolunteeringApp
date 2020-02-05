import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./VolnterStory.css";

import volunteerStoryImg1 from '../assets/images/volunteer-story-1.jpg'
import volunteerStoryImg2 from '../assets/images/volunteer-story-2.jpg'
import volunteerStoryImg3 from '../assets/images/volunteer-story-3.jpg'


class VolnterStory extends Component {
    render(){
        return (
     <div>
            <div className={"container mt-5 text-story-color"}>
                <h1 className={"text-center stories-title"}>Искуства на волонтери</h1>
                <hr className={"content-hr"}/>
                <div className={"row p-5"}>
                    <div className={"col-4 h-100"}>
                        <div className={"card-element"}>
                            <div className="card story-container-border mb-3">
                                <Card.Img variant="top" src={volunteerStoryImg2}/>
                                <h2 className={"text-center"}>Мирјана (57)</h2>
                                <small className={"text-center"}>Учесник во еколошка акција</small>
                                <div className="card-body text-danger">
                                    <p className="card-tex text-story-color ">Уживав во акцијата. Со добра мисла и решеност може многу да се постигне. Голем поддржувач сум на акции кои придонесуваат за подобра животна средина и активно учествувам во нив и стекнав нови пријатели.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className={"col-4 h-100"}>
                        <div className={"card-element "}>
                            <div class="card story-container-border mb-3">
                                 <Card.Img variant="top"  src={volunteerStoryImg1} />
                                 <h2 className={"text-center"}>Марија (21)</h2>
                                <small className={"text-center"}>Волонтер на филмски фестивал Giffoni</small>
                                 <div class="card-body text-danger">
                               <p class="card-text text-story-color p-2">Научив многу во текот на оваа работа. Дефинитивно одлично искуство, ако имам можност би го повторила повторно. Другите волотери беа супер, одлично се дружевме, а и филмската програма нудеше многу добри филмови.   </p>
                            </div>
                        </div>
                     </div>
                   </div>
                 <div className={"col-4 h-100"}>
                    <div className={"card-element"}>
                     <div class="card story-container-border mb-3">
                      <Card.Img variant="top"  src={volunteerStoryImg3} />
                         <h2 className={"text-center"}>Бојана (30)</h2>
                         <small className={"text-center"}>Црвен крст волонтер</small>
                        <div class="card-body text-danger">
                           <p class="card-tex text-story-color ">Според мене е од огромна важност присуството на лица кои можат да пружат медицинска помош на настани од јавен карактер. Имам искуство во областа и со задоволство учествувам секогаш кога имам време.   </p>
                       </div>
                    </div>
                    </div>
                </div>


                </div>


                    <ul class="pagination pt-2 mt-5 justify-content-center">
                      <li class="page-item "><a class="page-link pagination-text-color" href="#">Previous</a></li>
                      <li class="page-item"><a class="page-link pagination-text-color" href="#">1</a></li>
                      <li class="page-item"><a class="page-link pagination-text-color" href="#">2</a></li>
                      <li class="page-item"><a class="page-link pagination-text-color" href="#">3</a></li>
                      <li class="page-item"><a class="page-link pagination-text-color" href="#">Next</a></li>
                    </ul>
                 </div>
                  <div className={"image"}>
                        <img src="https://www.ageuk.org.uk/bp-assets/globalassets/lindsey/images/volunteering/hands_med.jpg"/>
                   </div>
</div>


        );

    }
}

export default VolnterStory;