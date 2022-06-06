import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { InputBoxes } from './InputBoxes';
import { ServiceApi } from '../ServiceApi';

export class DistanceCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = { distance: "", firstAirportCode: "SVO", secondAirportCode: "KGD", error: "" };
        this.onButtonClick = this.onButtonClick.bind(this);
        this.serviceApi = new ServiceApi();
    }

    async onButtonClick() {
        this.cleanState();

        const firstAirportInfo = await this.serviceApi.getAirportInfo(this.state.firstAirportCode);

        const secondAirportInfo = await this.serviceApi.getAirportInfo(this.state.secondAirportCode);

        if (firstAirportInfo.location === null || secondAirportInfo.location === null) {
            const errorMessage = this.createErrorMessage(firstAirportInfo, secondAirportInfo);
            this.setState({ error: errorMessage });
            return;
        }

        const distanceBetweenAirports = await this.serviceApi.calculateDistanceBetweenAirports(firstAirportInfo.location, secondAirportInfo.location);
        this.setState({ distance: distanceBetweenAirports });

    }

    cleanState() {
        this.setState({ result: "" });
        this.setState({ error: "" });
    }

    createErrorMessage(firstAirportInfo, secondAirportInfo) {
        const firstAirportInfoError = firstAirportInfo.location == null ? 'First airport code is wrong\n' : '';
        const secondAirportInfoError = secondAirportInfo.location == null ? 'Second airport code is wrong' : '';
        return 'Errors:\n' + firstAirportInfoError + secondAirportInfoError;
    }

    isEmptyString(value) {
        return value === undefined || value.length === 0;
    }

    render() {
        const isButtonDisabled = this.isEmptyString(this.state.firstAirportCode) || this.isEmptyString(this.state.secondAirportCode);
        return (
            <div style={{ margin: "10px" }}>
                <InputBoxes
                    firstAirport={this.state.firstAirportCode}
                    secondAirport={this.state.secondAirportCode}
                    setFirstAirport={(value) => this.setState({ firstAirportCode: value })}
                    setSecondAirport={(value) => this.setState({ secondAirportCode: value })}
                />
                <Button onClick={this.onButtonClick} disabled={isButtonDisabled}> Calculate </Button>
                {this.state.error ?
                    <p style={{ color: "red" }}>
                        {this.state.error.split('\n').map((item, index) => {
                            return (index === 0) ? item : [<br key={index} />, item]
                        })}
                    </p> : ''}
                {this.state.result ? <p> Distance between two airports: {this.state.distance}</p> : ''}
            </div>
        );
    }
}
