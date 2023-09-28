import React, { useState } from 'react';
import {
  Container,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Typography,
  FormControl,
  FormLabel,
} from '@mui/material';

export default function SignupScreen() {
  const [userType, setUserType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
  };

  return (
    <Container 
      maxWidth="sm" 
      style={{
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#000',
        color: '#fff'
      }}
    >
      <div style={{ width: '100%', padding: '2em', borderRadius: '1em', textAlign: 'center' }}>
        <Typography variant="h4" style={{ marginBottom: '1em' }}>
          Sign Up
        </Typography>
        <FormControl component="fieldset">
          <FormLabel component="legend">User Type</FormLabel>
          <RadioGroup row value={userType} onChange={(e) => setUserType(e.target.value)}>
            <FormControlLabel value="merchant" control={<Radio />} label="Merchant" />
            <FormControlLabel value="payer" control={<Radio />} label="Payer" />
          </RadioGroup>
        </FormControl>
        {userType === 'merchant' && (
          <TextField
            fullWidth
            margin="normal"
            label="Company Name"
            variant="outlined"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        )}
        {userType === 'payer' && (
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: '1em' }}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </div>
    </Container>
  );
}
