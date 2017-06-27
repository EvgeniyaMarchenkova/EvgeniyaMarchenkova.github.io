import React from 'react'
import { Button, Header, Icon } from 'semantic-ui-react'

export const ButtonWeekView = () => (
    <Button>
        Weeks View
    </Button>
)

export const ButtonMonthView = () => (
    <Button>
        Month View
    </Button>
)

export const HeaderRSCalendar = () => (
    <Header as='h2' icon>
        <Icon name='calendar' />
        RS-calendar
        <Header.Subheader>
            See your deadlines and lections here
        </Header.Subheader>
    </Header>
)

export const ModalModalExample = () => (
    <Modal trigger={<Button>Show Modal</Button>}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content >
            <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>We've found the following gravatar image associated with your e-mail address.</p>
                <p>Is it okay to use this photo?</p>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)
