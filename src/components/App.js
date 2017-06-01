import React from 'react'
import Calendar from './Calendar'


export default class  extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
        isWeek: false
       }
    }

    render() {
        return (
            <Calendar {...this.props}/>
        )
    }
}


