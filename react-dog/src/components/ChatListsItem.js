import React from 'react';
import{ withStyles} from 'material-ui/styles';
import Avatar from './Avatar';
import { ListItem, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';
import moment from 'moment';



const styles = theme => ({
    activeItem: {
        backgroundColor: theme.palette.grey[200],
      }
});

const ChatListsItem =  ({ classes, disabled, title, chatId, active, createdAt }) => (
    <ListItem
      button
      component={Link}
      to={`/chat/${chatId}`}
      className={active ? classes.activeItem : ''}
      disabled={disabled}
    >
      <Avatar colorFrom={chatId}>{title}</Avatar>
      <ListItemText primary={title} secondary={moment(createdAt).fromNow()}/>
    </ListItem>
  );

export default withStyles(styles)(ChatListsItem);