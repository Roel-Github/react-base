import * as React from 'react';
import Button from '@mui/material/Button';

type ButtonProps = {
  label: string,
  color: string
}

export default function ButtonComponent(props: ButtonProps) {
  return (
    <Button variant="contained" sx={{ backgroundColor: props.color, width: 250, height: 50 }}>{props.label}</Button>
  );
}