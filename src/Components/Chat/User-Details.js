import React from 'react';
import { Grid, Segment, Image, Header, Icon, Popup } from 'semantic-ui-react';
import PlaceholderImage from './people.png';
import './Chat.css';

const UserDetails = () => {
  return (
    <Grid centered columns={1} width={16} verticalAlign='middle' id="user-details" className="user-details-container">
      <Grid.Column>
        <Segment>
          <Grid centered verticalAlign='middle'>
            <Grid.Column width={16}>
              <Grid centered verticalAlign='middle' className="margin-no padding-no">
                <Grid.Column width={5}>
                  <Image src={PlaceholderImage} size='tiny' circular />
                </Grid.Column>
                <Grid.Column floated='left' width={10}>
                  <Header as='h3' className="text-white margin-no margin-top-ten">Bidisha Mondal 
                    <span>
                      <Popup
                        content='Edit User Details'
                        on='hover'
                        position='right center'
                        trigger={<Icon name='edit outline' className="edit-user-details"/>}
                      />
                    </span>
                  </Header>
                  <Header as='h5' className="text-white margin-no margin-top-ten">Web Developer</Header>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid>
  )
};

export default UserDetails;