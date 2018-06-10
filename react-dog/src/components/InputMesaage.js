import React from 'react';
import {withStyles} from 'material-ui/styles';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';


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
    state = {
        value: '',
    }
    
    handleValueChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    }
    
    handleKeyPress = (event) => {
        const { value } = this.state;
    
        if (event.key === 'Enter' && value) {
            this.props.sendMessage(value);
            this.setState({ value: '' });
        }
    }
    render() {
        const {classes, showJoinButton, onJoinButtonClick, disabled} = this.props;
        
        return (
            <div className={classes.InputMessageBlock}> 
                <Paper className={classes.InputMessage}>
                    {showJoinButton ? (
                        <Button
                            disabled = {disabled}
                            fullWidth
                            variant="raised"
                            color="primary"
                            onClick={onJoinButtonClick} >
                            Join
                        </Button>
                    ) : (
                    <Input 
                        disabled = {disabled}
                        fullWidth
                        placeholder='Type your message...'
                        value={this.state.value}
                        onChange={this.handleValueChange}
                        onKeyPress={this.handleKeyPress} />
                    )}
                </Paper>
            </div> 
        );
    }
} 

export default withStyles(styles)(InputMessage);