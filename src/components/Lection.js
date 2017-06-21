import React from 'react';
import FontAwesome from 'react-fontawesome'

export default class Lection extends React.Component {
    render() {

        return <div key="{this.props.eventData.id}">
                <style jsx>{`


                        .lection .description{
                            position: absolute;
                            bottom: 10px;
                            display:none;
                            border: 1px solid gray;
                            background-color:white;
                        }
                        .lection:hover .description {
                            display:block;
                    `}</style>
                    <div className="lection">
                        <div className="description">
                            <div className='fa-stack'>
                                <FontAwesome name='users' stack='1x' />
                                <div className="description">
                                    <div className="title-event">{this.props.eventData.title}</div>
                                    <div className="location-event"> Где: {this.props.eventData.title} </div>
                                </div>
                            </div>
                        </div>
                        <div className='fa-stack'>
                            <FontAwesome name='users' stack='1x' />
                        </div>
                    </div>
                </div>;
    }
}
