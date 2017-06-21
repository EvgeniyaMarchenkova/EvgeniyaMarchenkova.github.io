import React from 'react';
import FontAwesome from 'react-fontawesome'

export default class Deadline extends React.Component {

    render() {
        if (this.props.eventData) {

            return <div key="this.props.eventData.id">
                    <style jsx>{`
                        .deadline {
                            position:absolute;
                            bottom:0;
                            right:10%;
                         }

                        .deadline .description{
                            position: absolute;
                            bottom: 10px;
                            display:none;
                            border: 1px solid gray;
                            background-color:white;
                        }
                        .deadline:hover .description {
                            display:block;
                        }
                    `}</style>
                    <div className="deadline">
                        <div className='fa-stack'>
                            <FontAwesome name='clock-o' stack='1x' />
                            <div className="description">
                                <div className="title-event">{this.props.eventData.title}</div>
                                <div className="location-event"> Где: {this.props.eventData.title} </div>
                                <div className="lectors">  {this.props.trainers} </div>
                            </div>
                        </div>
                    </div>
                </div>
        } else {
            return (null);
        }
    }
}
