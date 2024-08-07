import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import SimpleLineChart from '../components/LineChart'
import TickPlacementBars from '../components/TickPlacementBars';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

export default function Dashboard() {
    const [subcription, setSubcription] = useState(null);
    
  return (
    <Box sx={{
      padding: 2
    }}>
     <Box>
     <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
     <Link to="subscription"> <Button variant="outlined" sx={{
          margin: 1,
          color: subcription || subcription===null? 'blue': 'gray'
        }} onClick={()=>{
            setSubcription(true)
            console.log(subcription)
        }}>Subscriptions</Button></Link>
        <Link to="revenue"><Button variant="outlined" sx={{
            color: subcription===false  ? 'blue': 'gray',
            margin: 1,
        }} onClick={()=>{
            setSubcription(false)
            console.log(subcription)
        }}>Revenue</Button></Link>
      <Routes>
        <Route path="subscription" element={ <Box sx={{
        display:'flex',
        justifyContent:'center'
      }}><SimpleLineChart /></Box>} />
        <Route path="revenue" element={ <Box sx={{
        display:'flex',
        justifyContent:'center'
      }}><TickPlacementBars /></Box>} />
        <Route path="*" element={<Navigate to="subscription" />} />
      </Routes>
    </Box>
    </Box>
  )
}
