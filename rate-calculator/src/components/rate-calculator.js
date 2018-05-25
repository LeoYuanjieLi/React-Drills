import React from 'react';

import NumberInput from './number-input';
import Output from './output';


export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dayRate: 600,
            hours: 8
        };
    }

    setDayRate(value) {
        this.setState({
            dayRate: value
        });
    }

    setHours(value) {
        this.setState({
            hours: value
        });
    }

    render() {
        const result = this.state.dayRate / this.state.hours;
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000}
                    value={this.state.dayRate}
                    onChange={value => this.setDayRate(value)} />
                <NumberInput id="hours" label="Hours" min={1} max={12}
                    value={this.state.hours}
                    onChange={value => this.setHours(value)}/>
                <Output id="hourly-rate" label="Hourly rate" value={result.toFixed(2)} />
            </form>
        );
    }
}
