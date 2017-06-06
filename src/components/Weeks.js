import React from 'react'

import TableCalendarContainer from './TableCalendarContainer'



export default React.createClass({
  render() {
    return <div>
      <div>{this.props.params.repoName}</div>
      <TableCalendarContainer/>
    </div>;
  }
})
