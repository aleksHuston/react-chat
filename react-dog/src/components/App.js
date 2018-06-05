import React from 'react';
import { withStyles } from 'material-ui/styles';
import {Provider} from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import ChatPage from '../containers/ChatPage';
import WellcomePage from '../containers/WellcomePage';
import configureStore from '../store';
import PrivateRoute from '../containers/PrivateRoute'
import history from '../utils/history';
const styles = theme => ({
  root: {
     },
});

const store = configureStore();

const App = ({classes}) => (
  <Provider store={store}>
    <Router history = {history}>
        <Switch>
          <PrivateRoute path='/chat' component = {ChatPage} />
          <Route path='/(wellcome)?' component = {WellcomePage}/>
          <Redirect path='/' />
        </Switch>
    </Router>
  </Provider>
);

export default withStyles(styles)(App);


