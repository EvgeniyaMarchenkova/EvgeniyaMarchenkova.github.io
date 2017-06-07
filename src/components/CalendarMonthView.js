import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { List } from 'immutable';
import ReactDOM from 'react-dom';


const nameOfDay = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
export default React.createClass({

    render() {
        const rows = this.props.calendarMonth.getFormattedDays().map(function (item, i){
            const entry = item.map(function (element, j) {
                return (
                    <td key={j}> {element} </td>
                );
            });
            return (
                <tr key={i}> {entry} </tr>
            );
        });
        return (


            <table>
                <thead>
                    <tr>
                    {nameOfDay.map(name => <td key={name.toString()}>{name}</td>)}
                    </tr>
                </thead>
                <tbody>
                     {rows}
                </tbody>
            </table>
    )
    }
})
