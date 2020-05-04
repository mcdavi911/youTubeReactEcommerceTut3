import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({

  selectTest: {
    padding: 8
  },
}));


export default function SelectNum({ range, handleValue, setValue }) {

  const classes = useStyles();
  //let quantity = 1;

  const populateQuantitySelect = () => {
    let quantities = []
    for (let idx = 0; idx < range; idx++) {
      quantities.push(<option key={idx} aria-label="None" value={idx + 1}>{idx + 1}</option>)
    }

    return quantities;
  }


  return (
    <FormControl style={{ marginLeft: 0, minWidth: 32 }} variant="outlined" className={classes.formControl}>
      <Select
        classes={{ root: classes.selectTest }}
        native
        value={setValue}
        onChange={(e) => handleValue(parseInt(e.target.value))}
      /*
      inputProps={{
        name: 'age',
        id: 'outlined-age-native-simple',
      }}
      */
      >
        {populateQuantitySelect()}
      </Select>
    </FormControl>
  )
}
