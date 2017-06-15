import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return <div>
            <style jsx>{`
                 .mode-link {
                        color:darkgrey;
                 }
                 .active {
                    color:grey;
                 }
            `}
            </style>
                    <Link {...this.props} className="mode-link" activeClassName="active"/>
            </div>
    }
})
