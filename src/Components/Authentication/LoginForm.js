import React from 'react';
import './Login.css';
import { Button, Form, Grid, Icon, Header } from 'semantic-ui-react';

const LoginForm = () => {
  return (
    <Grid centered columns={1} verticalAlign='middle' className="full-height">
      <Grid.Column verticalAlign='middle' width={16}>
        <Header as='h2' className="gradient-text">
          CHATTER MANIA
        </Header>
      </Grid.Column>
      <Grid.Column width={16}>
        <Form>
          <div className="form-field">
            <label className="gradient-text">USERNAME</label>
            <input placeholder='Username' className="margin-top-eight" type="text"/>
          </div>
          <div className="form-field">
            <label className="gradient-text">PASSWORD</label>
            <input placeholder='****' className="margin-top-eight" type="password"/>
          </div>
          <Button type='submit' className="full-width button-gradient">Submit</Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;