import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  show_message : {
    display:'block',
    color:'red'
  },
  hide_message : {
    display: 'none'
  }
});

const characterset = [
  {
    value: 'Numeric',
    label: 'Numeric',
  },
  {
    value: 'Alphanumeric',
    label: 'Alphanumeric',
  },
  {
    value: 'Alphabet',
    label: 'Alphabet',
  },
];
const codespecifications = [
    {
      value: 'Pattern',
      label: 'Pattern',
    },
    {
      value: 'Length',
      label: 'Length',
    }
  ];


class InputAdornments extends React.Component {

  render() {
    const { classes, patternVisbility, lengthVisibility } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          select
          label="characterset"
          className={classNames(classes.margin, classes.textField)}
          name="characterset"
          value={this.props.characterset}
          onChange={(e) => this.props.changeHandler(e)}
          required
          InputProps={{
            startAdornment: <InputAdornment position="start">charset</InputAdornment>,
          }}
        >
          {characterset.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="code-spec"
          className={classNames(classes.margin, classes.textField)}
          required
          InputProps={{
            startAdornment: <InputAdornment position="start">codespec.</InputAdornment>,
          }}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
            name: "codespec",
            value: this.props.codespec,
            onChange: (e)=>this.props.handleChangeFormA('codespec', e)

          }}
        >
          {codespecifications.map(option => (
            <MenuItem key={option.value}  value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-pattern">Code Pattern i.e.##-###-####</InputLabel>
          <Input
            disabled={patternVisbility}
            id="adornment-pattern"
            name="pattern"
            value={this.props.pattern}
            onChange={(e)=>this.props.changeHandler(e)}
            startAdornment={<InputAdornment position="start"><small>Code</small></InputAdornment>}
          />
        </FormControl>
        
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-length">
            <small>
                <span htmlFor="adornment-message" 
                   className={true ?classes.hide_message: classes.show_message }>Wrong credentials?</span></small>
          </InputLabel>
          <Input
            name="length"
            disabled={lengthVisibility}
            id="adornment-length"
            type="number"
            value={this.props.length}
            onChange={(e)=>this.props.changeHandler(e)}
            startAdornment={<InputAdornment position="start"><small>code.length</small></InputAdornment>}
          />
        </FormControl>

        <FormControl className={classNames(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-prefix">
            <small>
                <span htmlFor="adornment-message" 
                   className={this.props.Prefix_message ? classes.show_message : classes.hide_message}>Required field <span>Code Prefix</span></span></small>
          </InputLabel>
          <Input
            id="adornment-prefix"
            name="prefix"
            type="text"
            value={this.props.prefix}
            onChange={(e)=>this.props.changeHandler(e)}
            startAdornment={<InputAdornment position="start"><small>prefix</small></InputAdornment>}
          />
        </FormControl>
        <FormControl className={classNames(classes.margin, classes.textField)}>
        <InputLabel htmlFor="adornment-suffix">
            <small>
                <span htmlFor="adornment-message" 
                   className={this.props.Suffix_message ? classes.show_message : classes.hide_message}>Required field <span>Code suffix</span></span>
                </small>
          </InputLabel>
          <Input
            id="adornment-suffix"
            type='text'
            name="suffix"
            value={this.props.suffix}
            onChange={(e)=>this.props.changeHandler(e)}
            startAdornment={<InputAdornment position="start"><small>suffix</small></InputAdornment>}
          />
        </FormControl>
      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);
