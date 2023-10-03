import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';

function CheckoutForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px' }}>
        <Typography variant="h5" gutterBottom>
          Checkout
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default CheckoutForm;
