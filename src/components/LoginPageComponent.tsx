import React from 'react';
import ButtonComponent from './ButtonComponent';
import TextFieldComponent from './TextFieldComponent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Grid)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function LoginPageComponent() {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Item>
          <div style={{ height: 340, margin: 'auto', width: 350 }}>
            <Paper elevation={3} sx={{ height: 340 }} >
              <Grid size={12}>
                <Item>
                  <h2>User Login</h2>
                </Item>
              </Grid>
              <Grid size={12}>
                <Item>
                  <TextFieldComponent label='Username' type='text' id='username'></TextFieldComponent>
                </Item>
              </Grid>
              <Grid size={12}>
                <Item>
                  <TextFieldComponent label='Password' type='password' id='password'></TextFieldComponent>
                </Item>
              </Grid>
              <Grid size={12}>
                <Item>
                  <ButtonComponent label='Login' color='#1976d2'></ButtonComponent>
                </Item>
              </Grid>
            </Paper>
          </div>
        </Item>
      </Grid>
    </Grid>
  );
}