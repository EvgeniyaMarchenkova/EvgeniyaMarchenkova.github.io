import React from 'react';
import FontAwesome from 'react-fontawesome'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

export default class Lection extends React.Component {

    constructor(props){
        super(props);
        this.state={
            trainers: ''
        }

        this.renderLectionInfo = this.renderLectionInfo.bind(this);
    }

    componentDidMount() {
        this.props.getTrainersNames.call(this, this.props.eventData)
    }

    renderLectionInfo(){
        return <Modal trigger={<Button>Lection</Button>}>
            <Modal.Header>Lection Info</Modal.Header>
            <Modal.Content >
                <Modal.Description>
                    <div className="title-event">{this.props.eventData.title}</div>
                    <div className="location-event"> Где: {this.props.eventData.location} </div>
                    <div className="lectors"> Lectors: {this.state.trainers} </div>
                    <div className="video">
                        <a href="https://www.youtube.com/watch?v=3sE1OxDx00o&list=PLe--kalBDwjgwrEDcOKXba_v6ciHoq_8H">Смотреть запись</a>
                    </div>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    }

    render() {
        return <div key="{this.props.eventData.id}">{this.renderLectionInfo()}</div>;
    }
}
