import React from 'react';
import './Login.css';
import { Button, Form, Grid, Header } from 'semantic-ui-react';

const LoginForm = () => {
  return (
    <Grid centered columns={1} verticalAlign='middle' className="full-height">
      <Grid.Column verticalAlign='middle' width={16}>
        <Header as='h2' className="gradient-text">
          CHATTER MANIA
        </Header>
      </Grid.Column>
      <Grid.Column width={16} verticalAlign='middle'>
        <Form>
          <div className="form-field">
            <label className="gradient-text">USERNAME</label>
            <input placeholder='Username' className="margin-top-eight" type="text"/>
          </div>
          <div className="form-field">
            <label className="gradient-text">PASSWORD</label>
            <input placeholder='****' className="margin-top-eight" type="password"/>
          </div>
          <Button type='submit' className="full-width button-gradient">Sign In</Button>
          <div className="text-weight-medium margin-top-eight">
            Not a member yet? 
            <span className="gradient-text text-weight-bold margin-left-ten cursor-pointer">Sign Up</span>
          </div>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;