import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({

  selectTest2: {
    padding: '8px 8px 8px 72px',
    fontSize: 14
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },


}));


export default function SelectNum2({ range, handleValue, setValue, label }) {

  const classes = useStyles();
  //let quantity = 1;

  const populateQuantitySelect = () => {
    let quantities = []
    for (let idx = 0; idx < range; idx++) {
      quantities.push(<MenuItem key={idx} aria-label="None" value={idx + 1}>{idx + 1}</MenuItem>)
    }

    return quantities;
  }


  return (
    <>
      <FormControl style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 0 }} variant="outlined" className={classes.formControl}>
        <div style={{ position: 'absolute', marginLeft: 8, fontSize: 14 }}>{label}</div>

        <Select
          classes={{ root: classes.selectTest2 }}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={setValue}
          onChange={(e) => handleValue(parseInt(e.target.value))}
        >
          {populateQuantitySelect()}

        </Select>
      </FormControl>
    </>
  )
}



/*
  {label && <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>}

  <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
*/