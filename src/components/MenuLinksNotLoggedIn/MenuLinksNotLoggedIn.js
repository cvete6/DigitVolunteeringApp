import React from 'react';
import {
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function MenuLinksNotLoggedIn(){
    return(
        <React.Fragment>
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="/stories">Искуства од волонтери</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="/login">Најава</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="/register">Регистрација</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </React.Fragment>
    )
}

export default MenuLinksNotLoggedIn;