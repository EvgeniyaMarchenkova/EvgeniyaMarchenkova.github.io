import React from 'react';
import FontAwesome from 'react-fontawesome'
import { Button, Header, Image, Modal, Icon, Label, Tab, Divider, TextArea, Form, Embed, Accordion  } from 'semantic-ui-react'

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
        const panes = [
            { menuItem: 'Description', render: () => <Tab.Pane>{this.props.eventData.description}</Tab.Pane> },
            { menuItem: 'Location', render: () => <Tab.Pane>{this.props.eventData.location}</Tab.Pane> },
            { menuItem: 'Lectors', render: () => <Tab.Pane>{this.state.trainers}</Tab.Pane> },
            { menuItem: 'Resources', render: () => <Tab.Pane>

                {this.props.eventData.resources.map(function(resource, i) {
                console.log(resource)

                return <Accordion styled key={resource.i+resource.resource+resource.type}>
                    <Accordion.Title><Icon name='dropdown' />{resource.type}</Accordion.Title>
                    <Accordion.Content>
                    <Header size='small'>Url: </Header>
                    {resource.resource}
                    <Header size='small'>Description: </Header>
                    {resource.description}
                    </Accordion.Content>
                </Accordion>
            })}

            </Tab.Pane>},
            {menuItem: 'Video', render: () => <Tab.Pane><div className="video">

                    <Embed
                        id='JPdm-lcISBM'
                        source='youtube'
                    />

            </div></Tab.Pane> },
            {menuItem: 'Feedback', render: () => <Tab.Pane>
                <Form>
                    <TextArea placeholder='Leave your feedback' />
                    <Divider hidden/>
                    <Button type='submit'>Submit</Button>

                </Form>

            </Tab.Pane>}

        ]
        return <Modal trigger={<Label ribbon>Lection</Label>}>
            <Modal.Header>Lection Info</Modal.Header>
            <Modal.Content >
                <Modal.Description>
                    <Header size='large'>{this.props.eventData.title}</Header>
                    <Tab panes={panes} />
                    <div className="feedback"/>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    }

    render() {
        return <div key="{this.props.eventData.id}">{this.renderLectionInfo()}</div>;
    }
}
