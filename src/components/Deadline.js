import React from 'react';
import { Button, Header, Image, Modal, Icon, Label } from 'semantic-ui-react'

export default class Deadline extends React.Component {


    constructor(props){
        super(props);
        this.state={
            trainers: ''
        }

        this.renderDeadlineInfo = this.renderDeadlineInfo.bind(this);
    }

    componentDidMount() {
        this.props.getTrainersNames.call(this, this.props.eventData)
    }

    renderDeadlineInfo(){
       return <Modal trigger={ <Label ribbon>Deadline</Label>}>
            <Modal.Header>deadline info</Modal.Header>
            <Modal.Content >
                <Modal.Description>
                    <div className="title-event">{this.props.eventData.title}</div>
                    <div className="location-event"> Где: {this.props.eventData.location} </div>
                    <div className="lectors"> Lectors: {this.state.trainers} </div>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    }

    render() {
        if (this.props.eventData) {
            return <div key="this.props.eventData.id">{this.renderDeadlineInfo()}</div>
        } else {
            return (null);
        }
    }
}
