import React from 'react'

import TableCalendar from './TableCalendar'

const dayOfWeek = [{
    id:1,
    time:'0.00'
}, {
    id:2,
    time:'8.00'
}, {
    id:3,
    time:'9.00'
}, {
    id:4,
    time:'10.00'
}, {
    id:5,
    time:'11.00'
}, {
    id:6,
    time:'12.00'
}, {
    id:7,
    time:'13.00'
}, {
    id:8,
    time:'14.00'
}



]

export default React.createClass({
  render() {
    return (
      <div>
        <div>{this.props.params.repoName}</div>
        <TableCalendar  />
      </div>
    )
  }
})
