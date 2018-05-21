import React from 'react';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import ChatLists from './ChatLists';
import CreateChatButton from './CreateChatButton';

const styles = theme => ({
    drawerPaper: {    
      height: '100%',
      width: 320,
      },
    
      toolbar: {
        ...theme.mixins.toolbar,
        paddingRight: theme.spacing.unit * 3,
        paddingLeft: theme.spacing.unit * 3,
      
      },

      NavigationButton: {
        position: 'fixed',
        bottom: 0,
        width: 320,
        maxWidth: 320,
        backgroundColor: theme.palette.background.paper,

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
              position='fixed'
              margin="normal"
              placeholder="Search chats..."
            />
          </div>
        <Divider />

        <ChatLists chats ={chats} />
        <CreateChatButton />
        
        <BottomNavigation showLabels className={classes.NavigationButton}>
            <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
          
            

    </Drawer>    
);

export default withStyles(styles)(Sidebar);