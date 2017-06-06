import React from 'react'

import CalendarMonthView from './CalendarMonthView'


export default React.createClass({
  render() {
    return (

      <div>
        <div>{this.props.params.repoName}</div>
        <CalendarMonthView calendarMonth = {this.props.calendarMonth} calendarWeek = {this.props.calendarWeek}  />
      </div>
    )
  }
})
