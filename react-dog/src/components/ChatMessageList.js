import React from 'react';
import {withStyles} from 'material-ui/styles';
import ChatMessage from './ChatMessage'

const styles = theme => ({
    dialog:{
        height: '100%',
        width: '100%',
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: '120px',   
    },
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
        const {classes, messages} = this.props;

        return (
            <div className={classes.dialog} ref = 'dialog'>
                {messages && messages.map((message, index) => (
                    <ChatMessage key= {index} {... message} /> 
                ))}
            </div>
            );
        }
    }

    export default withStyles(styles)(ChatMessageList);