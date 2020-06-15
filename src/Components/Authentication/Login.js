import React from 'react';
import LoginForm from './LoginForm';
import { Segment, Grid } from 'semantic-ui-react';
import './Login.css';

const Login = () => {
  return (
    <div className="ui container">
      <Grid centered columns={1} verticalAlign='middle' className="full-view-height">
        <Grid.Column>
          <Segment placeholder className="login-component margin-no padding-no">
            <Grid columns={2} verticalAlign='middle' className="margin-no padding-no full-height">
              <Grid.Column width={8} className="full-height margin-no padding-no">
                <div className="bg-random-image full-height"></div>
              </Grid.Column>
              <Grid.Column width={8}>
                <LoginForm />
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;
