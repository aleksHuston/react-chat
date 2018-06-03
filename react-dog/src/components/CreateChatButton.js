import React from 'react';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from 'material-ui/Modal';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';


const styles = theme => ({
    AddButton: {
        position: 'fixed',
        left: 239,
        right: 'auto',
        bottom: theme.spacing.unit * 3 + 48,
    },
    modalWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: '30%',
        minWidth: '300px',
        padding: theme.spacing.unit * 3
    },
    
});
class CreateChatButton extends React.Component {
    state = {
        open: false,
        title: {
            value: '',
            isValid: true,
        }
    };
    toggleModal = () => {
        this.setState({ open: !this.state.open })
      };
    
    handleTitleChange = (event) => {
        this.setState({
            title: {
            value: event.target.value,
            isValid: true,
            }
        });
    };

    handleCreateClick = (event) => {
        event.preventDefault();

        const { title } = this.state;

        if (!title.value) {
            this.setState({
                title: {
                    value: title.value,
                    isValid: false,
                }
            })

            return;
        }

        this.props.onClick(title.value);
        this.toggleModal();
        this.setState({
            title: {
            value: '',
            isValid: true,
            },
        });
    }
    render () {
        const { classes } = this.props;
        const { open, title } = this.state;

        return (  
            <React.Fragment>
                <Button 
                    variant="fab" 
                    color="primary" 
                    aria-label="add"
                    className={classes.AddButton} 
                    onClick={this.toggleModal} >
                    <AddIcon />
                </Button>
                <Modal
                    open={open}
                    className={classes.modalWrapper}
                    onClose={this.toggleModal} >
                    <Paper className={classes.modal}>
                        <Typography variant="title" id="modal-title">
                            Create new chat
                        </Typography>
                        <TextField
                            required
                            fullWidth
                            label="My chat will be called..."
                            placeholder="Type the title..."
                            type="text"
                            margin="normal"
                            autoComplete="new-chat"
                            value={title.value}
                            onChange={this.handleTitleChange}
                            error={!title.isValid} />
                        <Button
                            color="primary"
                            onClick={this.handleCreateClick} >
                            Create
                        </Button>
                    </Paper>
                </Modal>
            </React.Fragment>
        );
    }
}


export default withStyles(styles)(CreateChatButton);