import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
    render() {
        return (
            <div>
            <h1>RS-calendar</h1>
            <ul role="nav">
            <li><NavLink onClick= {this.props.route.switchToWeek} to="/weeks">Weeks</NavLink></li>
            <li><NavLink onClick={this.props.route.switchToMonth} to="/month">Month</NavLink></li>
            </ul>
            {this.props.children}
    </div>
    )
    }
})
