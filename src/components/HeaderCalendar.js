import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
    render() {
        return (
            <div>
            <h1>RS-calendar</h1>
            <ul role="nav">
            <li><NavLink onClick= {this.props.switchToWeek} to="/weeks">Weeks</NavLink></li>
            <li><NavLink onClick={this.props.switchToMonth} to="/month">Month</NavLink></li>
            </ul>

        {this.props.children && React.cloneElement(this.props.children, {
            switchToWeek: this.switchToWeek,
            switchToMonth: this.switchToMonth
        })}
    </div>
    )
    }
})
