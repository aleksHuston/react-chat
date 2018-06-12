import React from 'react';
import {withStyles} from 'material-ui/styles';
import ChatMessage from './ChatMessage';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import { withRouter } from 'react-router-dom';


const styles = theme => ({
    dialog:{
        height: '100%',
        marginTop: '120px',
        width: '100%',
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: '120px',     
    },
    paper: {
        padding: theme.spacing.unit * 3
      }
});

class ChatMessageList extends React.Component {
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

    render() {
        const { classes, messages, match, activeUser } = this.props;
    
        if (!match.params.chatId) {
          return (
            <Paper className={classes.paper}>
                <Typography variant="display1" gutterBottom>
                    Start messaging…
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Use <strong>Global</strong> to explore communities around here.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Use <strong>Recents</strong> to see your recent conversations.
                </Typography>
            </Paper>
          );
        }
    
        return messages && messages.length ? (
            <div className={classes.dialog} ref="dialog">
            {messages.map(message => (
                <ChatMessage
                    key={message._id}
                    activeUser={activeUser}
                    {...message} />
            ))}
            </div>
        ) : (
            <Typography variant="display1">
                There is no messages yet...
            </Typography>
        );
      }
    }
    export default withRouter(withStyles(styles)(ChatMessageList));