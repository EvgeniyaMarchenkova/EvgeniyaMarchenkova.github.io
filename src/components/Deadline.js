import React from 'react';
import { Button, Header, Image, Modal, Icon, Label, Divider, Tab, Form, TextArea, Input } from 'semantic-ui-react'

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
        const panes = [
            { menuItem: 'Description', render: () => <Tab.Pane>{this.props.eventData.description}</Tab.Pane> },
            { menuItem: 'Deadline', render: () => <Tab.Pane>{this.props.eventData.start.slice(11,-4)}</Tab.Pane> },
            { menuItem: 'Lectors', render: () => <Tab.Pane>{this.state.trainers}</Tab.Pane> },
            { menuItem: 'Comments', render: () => <Tab.Pane>
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>

                    <TextArea placeholder='Leave your comment' />
                    <Divider hidden/>
                    <Button type='submit'>Submit</Button>

                </Form>
            </Tab.Pane>}
        ]
       return <Modal trigger={ <Label ribbon>Deadline</Label>}>
            <Modal.Header>deadline info</Modal.Header>
            <Modal.Content >
                <Modal.Description>
                    <Header size='large'>{this.props.eventData.title}</Header>
                    <Tab panes={panes} />
                    <div className="feedback">
                    </div>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    }

    render() {
        console.log(this.props.eventData)
        if (this.props.eventData) {
            return <div key="this.props.eventData.id">{this.renderDeadlineInfo()}</div>
        } else {
            return (null);
        }
    }
}
