import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>RS</h1>
                <ul role="nav">
                    <li><NavLink to="/weeks" >Weeksssss</NavLink></li>
                    <li><NavLink to="/months">Monthsssss</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})