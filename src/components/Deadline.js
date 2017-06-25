import React from 'react';
import FontAwesome from 'react-fontawesome'

export default class Deadline extends React.Component {

    state = {
        trainers: ''
    }


    componentDidMount() {
        this.props.getTrainersNames.call(this, this.props.eventData)
        /*
        let urls = this.props.eventData.speakers.map(function (id) {
            return fetch('http://localhost:4000/trainers/' + id)
                .then(function (response) {
                    return response.json();
                })
                .then(function (response) {
                    return response.name;
                })

        });
        Promise.all(urls).then(values => {
            this.setState({
                trainers : values.join(',')
            });
        })*/
    }

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
                                <div className="location-event"> Где: {this.props.eventData.location} </div>
                                <div className="lectors"> Lectors: {this.state.trainers} </div>
                            </div>
                        </div>
                    </div>
                </div>
        } else {
            return (null);
        }
    }
}
