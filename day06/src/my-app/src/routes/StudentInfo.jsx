import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function StudentInfo() {
    return (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          padding={3}
        >
          <Box display="flex" alignItems="center" mb={4}>
            <Avatar
              alt="Pict"
              src="img/Me.png"
              sx={{ width: 250, height: 250, mr: 4 }}
            />
            <Box>
                <Typography variant="h4" color="primary" sx={{ mb: 2}}>
                Student Info
                </Typography>
                <Typography variant="h6" color="action">
                  <b style={{ color: '#90CAF9' }}>Full name:</b> Nikolaev Nikita Ivanovich
                </Typography>
                <Typography variant="h6" color="action">
                  <b style={{ color: '#90CAF9' }}>Training experience:</b> 2 years
                </Typography>
                <Typography variant="h6" color="action">
                  <b style={{ color: '#90CAF9' }}>Age:</b> 20 years
                </Typography>
            </Box>
          </Box>
          <Button variant="contained" color="primary" component={Link} to="/">
            Back to Home
          </Button>
        </Box>
    )
}