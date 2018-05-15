import React from 'react';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';

import titleInitials from '../utils/title-initials';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = theme => ({
    drawerPaper: {
        position: 'inherit',
        width: 320,
      },
    
      toolbar: {...theme.mixins.toolbar,
        paddingRight: theme.spacing.unit * 3,
        paddingLeft: theme.spacing.unit * 3,
      },
      searchChat: {
        marginTop: 16,
        marginBottom: 8,
        width: '100%',
      },
    
      ListCaht: {
        overflowY: 'scroll',
      },
    
      AddButton: {
        position: 'absolute',
        left:239,
        right:'auto' ,
        bottom:72,
      },
    
      NavigationButton: {
        flexGrow: 1,
        width: 320,
        maxWidth: 320,
        backgroundColor: theme.palette.background.paper,
        paddingTop:8,
        paddingBottom: 10,
      },
    
});

const Sidebar = ({classes, chats}) => (
    <Drawer
        variant="permanent"
        classes={{
        paper: classes.drawerPaper,
        }}>

         <div className={classes.toolbar}>
            <TextField
              fullWidth
              margin="normal"
              placeholder="Search chats..."
            />
          </div>
        <Divider />
            <List className={classes.ListCaht}>
              {chats.map((chat, index)=> (
                <ListItem key = {index} button>
                  <Avatar>
                    {titleInitials(chat.title)}
                  </Avatar>
                  <ListItemText primary={chat.title}/>
                </ListItem> 
              ))}
            </List>
        <Button variant="fab" color="primary" aria-label="add" className={classes.AddButton}>
        <AddIcon />
        </Button>
        <BottomNavigation showLabels className={classes.NavigationButton}>
        <BottomNavigationAction label="My chats" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Explore" icon={<LocationOnIcon />} />
        </BottomNavigation>
          
            

    </Drawer>    
);

export default withStyles(styles)(Sidebar);