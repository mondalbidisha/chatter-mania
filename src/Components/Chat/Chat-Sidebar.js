import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import UserDetails from './User-Details';
import './Chat.css';

const ChatSidebar = () => {
  return (
    <Grid centered columns={1} width={16} verticalAlign='middle' className="full-height margin-no padding-no">
      <Grid.Column className="full-height margin-no padding-no">
        <Segment className="full-height margin-no padding-no chat-sidebar">
          <Grid centered verticalAlign='middle' className="margin-no padding-no">
            <Grid.Column width={16} className="margin-no padding-no">
              <UserDetails />
            </Grid.Column>
            <Grid.Column width={16}>
              {/* Conversation list */}
            </Grid.Column>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid>
  )
};

export default ChatSidebar;