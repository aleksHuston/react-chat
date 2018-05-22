import React from 'react';
import { withStyles } from 'material-ui/styles';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ChatPage from '../containers/ChatPage';
import WellcomePage from '../containers/WellcomePage';
import configureStore from '../store';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

const store = configureStore();

const App = ({classes}) => (
  <Provider store={store}>
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route path='/chat' component = {ChatPage} />
          <Route path='/wellcome' component = {WellcomePage}/>
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default withStyles(styles)(App);


