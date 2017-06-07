import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { List } from 'immutable';
import ReactDOM from 'react-dom';

let nameOfDay = ['Time/Day', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
let numberOfDate =  _.chunk(Array(31).fill().map((elm, i)  => i+1),7)

export default React.createClass({

    render() {

        return (
            <table>
            <thead>
            <tr>
            {nameOfDay.map(name => <td key={name.toString()}>{name}</td>)}
    </tr>
        </thead>
        <tbody>
        {this.props.getFormattedDays().map(elm => <tr>{elm.map(e => <td key={ e.toString() }>{e}</td>)}</tr>)}
    </tbody>
        </table>
    )
    }
})
