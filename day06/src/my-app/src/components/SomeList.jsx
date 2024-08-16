import React from "react";
import { Box, Button } from '@mui/material';

export default function SomeList(props) {
    return (
        <Box display="flex" justifyContent="center" gap={2} mt={2}>
            <Button variant="contained" color="success" onClick={props.add}>
              Add
            </Button>
            <Button variant="contained" color="error" onClick={props.clear}>
              Clear
            </Button>
        </Box>
    );
}