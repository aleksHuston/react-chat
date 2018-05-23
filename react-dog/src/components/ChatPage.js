import React from 'react';
import { withStyles } from 'material-ui/styles';
import { chats, messages } from '../mock-data';
import Sidebar from './Sidebar'
import ChatHeader from './ChatHeader';
import Chat from './Chat';

const styles = theme => ({

  });

const ChatPage = ({classes}) =>(
    <div className={classes.root}>
        <ChatHeader />
        <Sidebar chats = {chats} />  
        <Chat messages = {messages} />
    </div>
);

export default withStyles(styles)(ChatPage);