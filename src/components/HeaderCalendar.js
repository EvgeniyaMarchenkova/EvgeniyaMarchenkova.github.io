import React from 'react'
import NavLink from './NavLink'
import { Button } from 'semantic-ui-react'
import {ButtonWeekView, ButtonMonthView, HeaderRSCalendar} from './button'

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
                <HeaderRSCalendar></HeaderRSCalendar>
                <ul role="nav">
                    <li><NavLink to="/week"><ButtonWeekView></ButtonWeekView></NavLink></li>
                    <li><NavLink to="/month"><ButtonMonthView></ButtonMonthView></NavLink></li>
                </ul>
                        <div>
                {this.props.children}
                        </div>
            </div>
    )
    }
}
