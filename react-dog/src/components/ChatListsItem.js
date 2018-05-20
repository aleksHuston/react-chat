import React from 'react';
import{ withStyles} from 'material-ui/styles';
import Avatar from './Avatar';
import { ListItem, ListItemText } from 'material-ui/List';

const styles = theme => ({
    
});

const ChatListsItem = ({chat, title}) => (
    <ListItem button>
        <Avatar colorFrom={title}>
            {title}
        </Avatar>
        <ListItemText primary={title}/>
    </ListItem> 
);

export default withStyles(styles)(ChatListsItem);