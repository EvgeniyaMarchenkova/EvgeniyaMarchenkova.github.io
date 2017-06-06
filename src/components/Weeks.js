import React from 'react'

import CalendarWeekView from './CalendarWeekView'



export default React.createClass({
  render() {
      console.log(this.props)
    return <div>
      <div>{this.props.params.repoName}</div>
      <CalendarWeekView {...this.props} calendarMonth = {this.props.calendarMonth} calendarWeek = {this.props.calendarWeek} />
    </div>;
  }
})
