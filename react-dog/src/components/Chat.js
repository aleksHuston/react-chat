import React from 'react';
import {withStyles} from 'material-ui/styles';
import { withRouter } from 'react-router-dom';
import InputMessage from './InputMesaage';
import ChatMessageList from './ChatMessageList';


const styles = theme =>({
    windowChat:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '64px',
        paddingBottom: '120px',
        height: '100%',
        overflow: 'hidden',
        marginLeft: 320,  
    },
});

const Chat = ({classes, messages, activeUser,activeChat, joinChat, sendMessage, isConnected}) => (
    <main className={classes.windowChat}>
        <ChatMessageList 
            messages = {messages}
            activeUser={activeUser}
        />
        {activeChat && <InputMessage
            disabled = {!isConnected}
            sendMessage={(content) => sendMessage(activeChat._id, content)}
            showJoinButton={!activeUser.isChatMember}
            onJoinButtonClick={() => joinChat(activeChat._id)}
            activeUser={activeUser} />}
    </main>        
);

export default withRouter(withStyles(styles)(Chat));