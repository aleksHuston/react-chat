import React from 'react';
import {withStyles} from 'material-ui/styles';
import classnames from 'classnames';
import titleInitials from '../utils/title-initials';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

const styles = theme =>({
   
    content: {
        flexGrow: 'inherit',
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        height: 64,
    },

    windowChat:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '64px',
        height: `calc(100% - 111)`,
        overflow: 'hidden',
        marginLeft: 320,
        
    },

    dialog:{
        overflowX: 'scroll',
        height: '100%',
        width: '100%',
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: '120px',   
    },

    InputMessageBlock:{
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 320,
        padding:theme.spacing.unit * 3,
        width: `calc(100% - 320)`,
    },

    messageWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
    },

    messageWrappperFromMe: {
        justifyContent: 'flex-end',
    },

    message: {
        maxWidth: '70%',
        minWidth: '10%',
        padding: theme.spacing.unit,
        marginLeft: theme.spacing.unit * 2,
    },

    messageFromMe: {
        marginRight: theme.spacing.unit * 2,
        backgroundColor: '#e6dcff'
    },

    InputMessage:{
        padding: 16,

    },
});

class Chat extends React.Component {
    componentDidMount() {
        this.scrollDownHistory();
        }
      
    componentDidUpdate() {
        this.scrollDownHistory();
        }
    scrollDownHistory () {
        const dialog = this.refs.dialog;
      
    if (dialog) {
        dialog.scrollTop = dialog.scrollHeight;
        }
    }
    render () {
    const {classes, messages} = this.props;
        return(
            <main className={classes.windowChat}>
                <div className={classes.dialog} ref = 'dialog'>
                    {messages && messages.map((message, index) => {
                        const isMessageFromMe = message.sender === 'me';

                        const userAvatar = (
                            <Avatar>
                            {titleInitials(message.sender)}
                            </Avatar>
                        );

                        return (
                            <div key={index} className={ classnames(
                                classes.messageWrapper,
                                isMessageFromMe && classes.messageWrappperFromMe 
                                )}>
                                {!isMessageFromMe && userAvatar}
                                <Paper className={classnames(
                                    classes.message,
                                    isMessageFromMe && classes.messageFromMe )}>
                                    <Typography variant="caption">
                                    {message.sender}
                                    </Typography>
                                    <Typography variant="body1">
                                    {message.content}
                                    </Typography>
                                </Paper>
                                {isMessageFromMe && userAvatar}
                            </div>
                        );
                    })}
                </div>

                <div className={classes.InputMessageBlock}> 
                    <Paper className={classes.InputMessage}>
                        <Input fullWidth placeholder='Type your message...'/>
                    </Paper>
                </div> 
                
            </main>        
        );
    }
}

export default withStyles(styles)(Chat);