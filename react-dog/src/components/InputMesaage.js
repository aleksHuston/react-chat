import React from 'react';
import {withStyles} from 'material-ui/styles';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    InputMessage:{
        padding: theme.spacing.unit * 2,

    },
    InputMessageBlock:{
        position: 'fixed',
        left: 'auto',
        right: 0,
        bottom: 0,
        width: `calc(100% - 320px)`,
        padding: theme.spacing.unit * 3,
    },
});

class InputMessage extends React.Component {
    render() {
        const {classes} = this.props;
        
        return (
            <div className={classes.InputMessageBlock}> 
                <Paper className={classes.InputMessage}>
                    <Input fullWidth placeholder='Type your message...'/>
                </Paper>
            </div> 
        );
    }
} 

export default withStyles(styles)(InputMessage);