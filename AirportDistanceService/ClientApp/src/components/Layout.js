import React, { Component } from 'react';
import { DistanceCalculator } from './DistanceCalculator';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            <div>
                <NavMenu />
                <DistanceCalculator/>
            </div>
        );
    }
}
