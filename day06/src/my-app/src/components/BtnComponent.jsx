import React from 'react';
import { Box, Button } from '@mui/material';

export default function BtnComponent(props) {
  return (
    <Box display="flex" justifyContent="center" gap={2} mt={2}>
      {(props.status === 0)? 
        <Button variant="contained" color="success"
        onClick={props.start}>Start</Button> : ""
      }

      {(props.status === 1)? 
        <Box display="flex" justifyContent="center" gap={2}>
          <Button variant="contained" color="error"
                  onClick={props.stop}>Stop</Button>
          <Button variant="contained" color="warning"
                  onClick={props.reset}>Reset</Button>
        </Box> : ""
      }

     {(props.status === 2)? 
        <Box>
          <Button variant="contained" color="success"
                  onClick={props.resume}>Resume</Button>
          <Button variant="contained" color="warning"
                  onClick={props.reset}>Reset</Button>
        </Box> : ""
      }
     
    </Box>
  );
}