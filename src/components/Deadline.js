import React from 'react';
import FontAwesome from 'react-fontawesome'

export default class Deadline extends React.Component {
    render() {
        return <span>
             <style jsx>{`
                 .fa {
                        width:50px;
                        height:50px;
                 }

            `}
            </style>
            <FontAwesome name='fa-clock-o' />
        </span>
    }
}
