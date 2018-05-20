import React from 'react';
import {withStyles} from 'material-ui/styles';
import List from 'material-ui/List';
import ChatListsItem from './ChatListsItem.js';

const styles = theme => ({
 ListCaht: {
    height: '100%',

  
},
});

const ChatLists = ({classes, chats}) => (
<List className={classes.ListCaht}>
    {chats.map((chat, index)=> (
        <ChatListsItem key = {index} {...chat} />
    ))}
</List> 
);

export default withStyles(styles)(ChatLists);