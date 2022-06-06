import React, { Component } from 'react';

export class InputBoxes extends Component {
    render() {
        return (
            <div style={{ width: "15%"}}>

                <div className="form-group">
                    <label>First airport code*</label>
                    <input
                        type="text"
                        className="form-control form-control-md"
                        value={this.props.firstAirport}
                        onChange={(e) => this.props.setFirstAirport(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Second airport code*</label>
                    <input
                        type="text"
                        className="form-control form-control-md"
                        value={this.props.secondAirport}
                        onChange={(e) => this.props.setSecondAirport(e.target.value)} />
                </div>

            </div>
        );
    }
}