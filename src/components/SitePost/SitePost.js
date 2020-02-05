import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import sideImg from '../../assets/images/volunteer-hands.jpg'
import './SitePost.css'

class SitePost extends Component {
    render(){
        return (
            <div className={"row post-text"}>
                <div className={"col-4"}>
                    <img src={sideImg} className={"img-fluid rounded-circle"}/>
                </div>
                <div className={"col-2"}></div>
                <div className={"col "}>
                    <h4 className={"pb-3 btn-text"}>Донирај во хуманитарни цели</h4>
                    <div className={"pb-2"}>
                        Сумата која се донирала во 2017 година во хуманитарни цели изнесува околу 400 милијарди долари.
                    </div>
                    <div className={"pb-2"}>
                        Приклучи се и ти, донирај во целите кои се поддржани од волонтирај.мк и направи свој придонес.
                    </div>
                    <div className={"pb-2"}>
                        <button className={"btn-site-post mt-4 py-4 btn active-pink-btn btn-text"}><a href="/donateForm"> Донирај </a>  </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SitePost;