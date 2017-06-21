import React from 'react'
import NavLink from './NavLink'

export default class HeaderCalendar  extends React.Component {

    switchToMonth = () => this.props.route.selectMode.selectMode('month')

    switchToWeek = () => this.props.route.selectMode.selectMode('week')

    render() {

        return (

            <div>
                <style jsx>{`
                        ul {
                            list-style-type:none;
                            display: flex;
                            justify-content: space-between;
                            padding-right:40px;
                        }

                    `}</style>
                <h1>RS-calendar</h1>
                <ul role="nav">

                    <li><NavLink to="/week">Weeks View</NavLink></li>
                    <li><NavLink to="/month">Month View</NavLink></li>
                </ul>
                        <div>
                {this.props.children}
                        </div>
            </div>
    )
    }
}
