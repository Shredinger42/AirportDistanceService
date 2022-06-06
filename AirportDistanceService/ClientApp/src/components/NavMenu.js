import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {
        return (
            <div>
                <Navbar fluid style={{ width: "100%" }}>
                    <Navbar.Brand>
                        Airport distance calculator
                    </Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}
