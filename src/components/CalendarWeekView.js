import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { List } from 'immutable';
import ReactDOM from 'react-dom';


let nameOfDay = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
export default React.createClass({

    render() {
        let resultArr = [];
        for (let i=0; i<=6; i++) {
            let cell = nameOfDay[i] + '/' + this.props.calendarWeek.getFormattedDays()[i];
            resultArr.push(cell)
        }
        return (
            <div>
                <a onClick={this.props.calendarWeek.prevWeek} href='#'>Previus Week</a>
                <a onClick={this.props.calendarWeek.nextWeek} href='#'>Next Week</a>
                <table>
                    <thead>
                        <tr>
                        {resultArr.map(name => <td key={name.toString()}>{name}</td>)}
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
    )
    }
})
