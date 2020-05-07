import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'rgb(229, 229, 229) 0px -1px 0px 0px inset',
    background: '#f6f6f6',
    //marginBottom: theme.spacing(1)
  },
  gridItemProduct: {
    flexBasis: '50%',
  },
  productInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingRight: 12,

    '& > p': {
      fontSize: '1rem',
      color: theme.palette.text.primary,
      margin: 0
    }
  },
  test: {
    ...theme.typography.body1
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    //width: '100%',
    marginRight: theme.spacing(3)
  },
  testy: {
    width: '100%'
  },
  selectTest: {
    padding: 8
  },
}));


export default function SelectList({ devices, handleValue }) {
  const classes = useStyles();

  const [value, setValue] = React.useState();

  const handleChange = (e) => {

    setValue(e.target.value);

    handleValue(e.target.value);
  };


  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl} style={{ display: 'block' }}>
        <InputLabel htmlFor="outlined-age-native-simple">Device</InputLabel>
        <Select
          fullWidth
          native
          value={value}
          label="Device"
          onChange={handleChange}
        >
          <option aria-label="None" value="" />

          {Object.entries(devices).map(([brand, model], idx) => (
            <optgroup key={idx} label={brand} style={{ textTransform: 'capitalize' }}>
              {model.map((m, idx) => (
                <option key={idx} value={`${brand} ${m.name}`}>{m.name}</option>
              ))}
            </optgroup>
          ))}
        </Select>
      </FormControl>

      {
        /*
<FormControl variant="outlined" className={classes.formControl} style={{ display: 'block' }}>
    <InputLabel htmlFor="outlined-age-native-simple">Device</InputLabel>
    <Select
      fullWidth
      native
      value={state.age}
      label="Device"
      onChange={handleChange}
      inputProps={{
        name: 'device',
        id: 'outlined-age-native-simple',
      }}
    >
      <option aria-label="None" value="" />

      {Object.entries(devices).map(([brand, model], idx) => (
        <optgroup key={idx} label={brand} style={{ textTransform: 'capitalize' }}>
          {model.map((m, idx) => (
            <option key={idx} value={m.name}>{m.name}</option>
          ))}
        </optgroup>
      ))}
    </Select>
  </FormControl>
        */
      }

    </div>
  )
}
