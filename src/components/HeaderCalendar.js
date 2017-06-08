import React from 'react'
import NavLink from './NavLink'

export default class HeaderCalendar  extends React.Component {

    switchToMonth = () => this.props.route.selectMode.selectMode('month')

    switchToWeek = () => this.props.route.selectMode.selectMode('week')

    render() {
        return (
            <div>
            <h1>RS-calendar</h1>
            <ul role="nav">
            <li><NavLink onClick= {::this.switchToWeek} to="/weeks">Weeks</NavLink></li>
            <li><NavLink onClick={::this.switchToMonth} to="/month">Month</NavLink></li>
            </ul>
            {this.props.children}

    </div>
    )
    }
}
