import React from 'react';
import {withStyles} from 'material-ui/styles';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import ChatListsItem from './ChatListsItem.js';

const styles = theme => ({
ListCaht: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll', 
},
noChats: {
    textAlign: 'center',
},
});

const ChatLists = ({classes, chats, activeChat}) => (
<List className={classes.ListCaht}>
    {chats && chats.length ? (
        chats.map((chat) => (
            <ChatListsItem
                key={chat._id}
                active={activeChat && activeChat._id === chat._id}
                chatId={chat._id}
                {...chat} />
        ))
        ) : (
        <Typography variant="subheading" className={classes.noChats}>
            There is no chats yet...
        </Typography>
        )}
</List> 
);

export default withStyles(styles)(ChatLists);