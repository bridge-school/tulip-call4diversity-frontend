import React from 'react';
import DateTimePicker from "react-widgets/lib/DateTimePicker";
// import { withStyles } from "@material-ui/core/styles";

// const styles = theme => ({
//   bootstrapRoot: {
//     padding: 0,
//     "label + &": {
//       marginTop: theme.spacing.unit * 3
//     }
//   },
//   bootstrapInput: {
//     marginTop: 5,
//     marginRight: 20,
//     borderRadius: 4,
//     backgroundColor: theme.palette.common.white,
//     border: "1px solid #ced4da",
//     fontSize: 16,
//     padding: "10px 12px",
//     width: "calc(100% - 24px)",
//     transition: theme.transitions.create(["border-color", "box-shadow"]),
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"'
//     ].join(","),
//     "&:focus": {
//       borderColor: "#80bdff",
//       boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
//     }
//   },
//   bootstrapFormLabel: {
//     fontSize: 18,
//     fontWeight: 700,
//     color: "black"
//   }Tha
// });

const WrappedDateTimePicker = ({label, ...props}) => {
  const onChange = props.input.onChange;
  console.log(label)
  return <div>{label}<DateTimePicker onChange={onChange}/></div>;
};

// export default withStyles(styles)(WrappedDateTimePicker);
export default WrappedDateTimePicker;