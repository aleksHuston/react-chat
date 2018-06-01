import React from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import UserMenu from './UserMenu';
import Avatar from './Avatar';
import ChatMenu from './ChatMenu';

const styles = theme => ({
    appBar: {
        position: 'fixed',
        width: `calc(100% - 320px)`,
        marginBottom: 0,
      },
     
});

class ChatHeader extends React.Component {
    render () {
        const {classes, activeUser, logout, activeChat, editUser, leaveChat, deleteChat} = this.props;
        return (
            <AppBar className={classes.appBar}>
                <Toolbar>
                {activeChat ? (
                    <React.Fragment>
                    <Avatar colorFrom={activeChat._id}>
                        {activeChat.title}
                    </Avatar>
                    <Typography variant="title" className={classes.appBarTitle}>
                        {activeChat.title}
                        <ChatMenu
                            activeUser={activeUser}
                            onLeaveClick={() => leaveChat(activeChat._id)}
                            onDeleteClick={() => deleteChat(activeChat._id)} />
                    </Typography>
                    </React.Fragment>
                ) : (
                    <Typography variant="title" className={classes.appBarTitle}>
                        DogeCodes React Chat
                    </Typography>
                )}
                <UserMenu
                    activeUser={activeUser}
                    onLogoutClick={logout}
                    onEditProfileClick={editUser} />
                </Toolbar>
            </AppBar>
        )
    }
}
    

export default withStyles(styles)(ChatHeader);