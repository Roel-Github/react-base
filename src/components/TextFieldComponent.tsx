import * as React from 'react';
import TextField from '@mui/material/TextField';

type TextFieldProps = {
  label:  string,
  type: string,
  id: string
}

export default function TextFieldComponent(props: TextFieldProps) {
  return (
    <TextField
      id={props.id} 
      variant="outlined" 
      label={props.label} 
      sx={{"& .MuiInputBase-root":{width:250}}}
      type={props.type}
    />
  );
}