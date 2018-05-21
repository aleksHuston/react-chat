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
        height: `calc(100% - 111)`,
        marginLeft:320,
        overflow:  'hidden',
    },
});

const Chat = ({classes, messages}) => (
    <main className={classes.windowChat}>
        <ChatMessageList messages = {messages}/>
        <InputMessage />
    </main>        
);

export default withStyles(styles)(Chat);