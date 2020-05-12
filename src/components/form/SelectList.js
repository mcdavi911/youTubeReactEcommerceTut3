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


export default function SelectList({ list, label, handleValue }) {
  const classes = useStyles();

  const [value, setValue] = React.useState();
  const isObj = typeof list === 'object';

  const handleChange = (e) => {
    setValue(e.target.value);

    handleValue(e.target.value);
  };




  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl} style={{ display: 'block' }}>
        <InputLabel style={{ textTransform: 'capitalize' }} htmlFor="outlined-age-native-simple">{label}</InputLabel>
        <Select
          fullWidth
          native
          value={value}
          label={label}
          onChange={handleChange}
        >
          <option aria-label="None" value="" />

          {Array.isArray(list) ? (
            list.map(item => (
              <option key={item.id} value={item.label}>{item.label}</option>
            ))
          ) : (
              Object.entries(list).map(([key, value], idx) => (
                <optgroup key={idx} label={key} style={{ textTransform: 'capitalize' }}>

                  {Array.isArray(value) && value.map((arrayItem, idx) => (
                    <option key={arrayItem.id} value={`${key} ${arrayItem.label}`}>{arrayItem.label}</option>
                  ))}

                </optgroup>
              ))
            )}

        </Select>
      </FormControl>
    </div>
  )
}




/*


          {Array.isArray(list) ? (
            list.map(item => (
              <option key={item.id} value={item.label}>{item.label}</option>
            ))
          ) : (
              <p>hell</p>
            )}


    {Object.entries(list).map(([key, value], idx) => (
            <optgroup key={idx} label={key} style={{ textTransform: 'capitalize' }}>

            {Array.isArray(value) && value.map((arrayItem, idx) => (
              <option key={arrayItem.id} value={`${key} ${arrayItem.label}`}>{arrayItem.label}</option>
            ))}

            </optgroup>
          ))}


{Object.entries(list).map(([key, value], idx) => (
            <optgroup key={idx} label={key} style={{ textTransform: 'capitalize' }}>

            {Array.isArray(value) && value.map((arrayItem, idx) => (
              <option key={arrayItem.id} value={`${key} ${arrayItem.label}`}>{arrayItem.label}</option>
            ))}

            </optgroup>
          ))}

          */