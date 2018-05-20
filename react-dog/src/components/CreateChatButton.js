import React from 'react';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    AddButton: {
        position: 'fixed',
        left: 239,
        right: 'auto',
        bottom: theme.spacing.unit * 3 + 48,
      },
    
});

const CreateChatButton = ({classes}) => (
    <Button variant="fab" color="primary" aria-label="add" className={classes.AddButton}>
            <AddIcon />
    </Button>
);

export default withStyles(styles)(CreateChatButton);