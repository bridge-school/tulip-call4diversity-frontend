import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

/**
 * Class for App Header Component
 */

const styles = theme => ({
    button: {
    },
    toolbar: {
        display: 'flex',
        //TODO: fix the size and centering
        // border:'1px solid hotpink',
        justifyContent: 'space-between',
    },
    appbar: {
        textAlign: 'center',
        // background: 'white',
        // color: 
    }
});

class AppHeader extends Component {

    render() {
        const { classes } = this.props;
        return (
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="title" color="inherit">
                            Call for Diversity
                        </Typography>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Submit Event
                        </Button>
                    </Toolbar>
                </AppBar>
        );
    }

}

export default withStyles(styles)(AppHeader);