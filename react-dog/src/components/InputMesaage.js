import React from 'react';
import {withStyles} from 'material-ui/styles';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    InputMessage:{
        padding: 16,

    },
    InputMessageBlock:{
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 320,
        padding:theme.spacing.unit * 3,
        width: `calc(100% - 320)`,
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