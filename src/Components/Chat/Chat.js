import React from 'react';
import ChatSidebar from './Chat-Sidebar';
import { Grid, Segment } from 'semantic-ui-react';
import './Chat.css';

const Chat = () => {
  return (
    <Grid centered columns={1} width={16} verticalAlign='middle' className="full-view-height margin-no padding-no">
      <Grid.Column className="margin-no padding-no">
        <Segment className="margin-no padding-no">
          <Grid centered columns={1} verticalAlign='middle' className="full-height margin-no padding-no">
            <Grid.Column verticalAlign='middle' width={4} className="full-height margin-no padding-no">
                <ChatSidebar />
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={12}>
                CHATTER MANIA
            </Grid.Column>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid>
  )
};

export default Chat;