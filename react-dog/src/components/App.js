import React from 'react';
import { withStyles } from 'material-ui/styles';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ChatPage from './ChatPage';
import WellcomePage from './WellcomePage';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

  
const App = ({classes}) => (
  <Router>
    <div className={classes.root}>
      <Switch>
        <Route path='/chat' component = {ChatPage} />
        <Route path='/wellcome' component = {WellcomePage}/>
      </Switch>
    </div>
  </Router>
);

export default withStyles(styles)(App);


