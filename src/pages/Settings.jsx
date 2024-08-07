import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Settings() {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showSave, setShowSave] = useState(false);

  useEffect(() => {
    if (title || email || backgroundColor !== '#ffffff' || (startDate && endDate)) {
      setShowSave(true);
    } else {
      setShowSave(false);
    }
  }, [title, email, backgroundColor, startDate, endDate]);

  const handleSave = () => {
    console.log('Title:', title);
    console.log('Email:', email);
    console.log('Background Color:', backgroundColor);
    console.log('Active Date:', [startDate, endDate]);
  };

  const handleColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Box sx={{
        padding: 6
      }}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
          type="email"
        />
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <TextField
            label="Background Color"
            value={backgroundColor}
            onChange={handleColorChange}
            fullWidth
            margin="normal"
          />
          <input
            type="color"
            value={backgroundColor}
            onChange={handleColorChange}
            style={{ marginLeft: '16px', height: '56px', border: 'none' }}
          />
        </Box>
        <Box sx={{ display: 'flex', mt: 2 }}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            customInput={<TextField fullWidth margin="normal" />}
          />
          <Box sx={{ mx: 2, alignSelf: 'center' }}>to</Box>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="End Date"
            customInput={<TextField fullWidth margin="normal" />}
          />
        </Box>
        {showSave && (
          <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>
            Save
          </Button>
        )}
      </Box>
    </Box>
  );
}

