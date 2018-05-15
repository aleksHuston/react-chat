import React from 'react';
import { withStyles } from 'material-ui/styles';



import { chats, messages } from './mock-data';


import Sidebar from './components/Sidebar'
import ChatHeader from './components/ChatHeader';
import Chat from './components/Chat'



const styles = theme => ({
  root: {
    height: '100%',
    flexGrow: 1,
    width: 320,
    maxWidth: 320,
    backgroundColor: theme.palette.background.paper,
  },

});


  
class App extends React.Component {
  render() {
    const { classes } = this.props;
    
    return (

      <div className={classes.appFrame}>

          <ChatHeader />
          <Sidebar chats = {chats} />  
          <Chat messages = {messages} />
            
     
          
            
          
        
      </div>
    );
  }
}






export default withStyles(styles)(App);


