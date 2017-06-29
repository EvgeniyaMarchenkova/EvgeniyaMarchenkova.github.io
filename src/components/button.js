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


