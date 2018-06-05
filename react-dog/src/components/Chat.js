import React from 'react';
import {withStyles} from 'material-ui/styles';
import InputMessage from './InputMesaage';
import ChatMessageList from './ChatMessageList';


const styles = theme =>({
    windowChat:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '64px',
        height: '100%',
        overflow: 'hidden',
        marginLeft: 320,  
    },
});

const Chat = ({classes, messages, activeUser}) => (
    <main className={classes.windowChat}>
        <ChatMessageList 
            messages = {messages}
            activeUser={activeUser}
        />
        <InputMessage />
    </main>        
);

export default withStyles(styles)(Chat);