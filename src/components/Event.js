import React, { Component } from "react";

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Criteria from './Criteria';

const timestampFormatter = (timestamp) => {
 const date = new Date(timestamp * 1000);
 return `${date.toUTCString()}`
 //TODO - finish proper date formatting
}

// TODO - add a location string assembler function

// TODO - figure out what's up with the links

const styles = theme => ({
    root: {
      padding: theme.spacing.unit * 3,
      paddingBottom: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 3,
    },
  });


const Event = (props) => {
    const { classes } = props;
        const { name, location, date, websiteUrl} = props.conference;
        return(
            <Paper className={classes.root}>
                <Typography variant="title" color="primary" gutterBottom><a target="_blank" href={websiteUrl}> {name}</a></Typography>
                <Typography variant="subheading" > {timestampFormatter(date)}  •  {location} </Typography>
                <Criteria conference={props.conference}/>
            </Paper>
        );
}

export default withStyles(styles)(Event);