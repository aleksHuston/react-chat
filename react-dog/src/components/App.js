import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ChatPage from './ChatPage';


  
const App = () => (
  <Router>
    <React.Fragment>
      <Route path='/chat' component = {ChatPage} />
    </React.Fragment>
  </Router>
);

export default App;


