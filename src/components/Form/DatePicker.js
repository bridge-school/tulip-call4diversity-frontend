import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { withStyles } from '@material-ui/core/styles';
import DateTimePicker from "react-widgets/lib/DateTimePicker";

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>

  <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />

  export default renderDateTimePicker;