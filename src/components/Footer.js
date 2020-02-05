import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterSocials from "./FooterSocials/FooterSocials";


class Footer extends Component {
    render(){
        return (
            <div className={"container-fluid footer-bg pt-3 pb-4"}>
                <div className={"row"}>
                    <div className={"col-7"}>
                        <FooterLinks/>
                    </div>
                    <div className={"col"}>
                        <FooterSocials/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;