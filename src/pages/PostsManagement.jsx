import React from 'react'
import TableComponent from '../components/Table'
import { Box, Typography } from '@mui/material'

export default function PostsManagement() {
  return (
    <Box sx={{
      padding: 2
    }}>
       <Typography variant="h4" gutterBottom>
       Posts management
      </Typography>

      <Box sx={{
        padding: 6,

      }}>
        <TableComponent></TableComponent>
      </Box>
    </Box>
  )
}
