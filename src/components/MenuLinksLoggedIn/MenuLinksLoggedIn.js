import React from 'react';
import {
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import app from "../../firebaseConfig"

function MenuLinksLoggedIn(){
    return(
        <React.Fragment>
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="/stories">Искуства од волонтери</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="#" onClick={() => app.auth().signOut()}>Одјава</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </React.Fragment>
    )
}

export default MenuLinksLoggedIn;