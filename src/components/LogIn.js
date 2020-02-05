import React, { useCallback, useContext } from "react";
import Menu from "./Menu/Menu";
import SectionComponent from "./SectionComponent/SectionComponent"
import Footer from "./Footer";
import LogInData from "./LogInData/LogInData"
import { withRouter, Redirect } from "react-router";
import app from "../firebaseConfig.js";
import { AuthContext } from "../Auth.js";


const LogIn = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }
        return(
            <div>
                <Menu/>
                <SectionComponent>
                    <LogInData handleLogin={handleLogin}/>
                </SectionComponent>
                <SectionComponent/>
                <SectionComponent/>

                <Footer/>
            </div>
        );
}

export default withRouter(LogIn);