import { Link as RouterLink } from "react-router-dom";
import { Box, Link, IconButton } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import InfoIcon from '@mui/icons-material/Info';
import '@fontsource/roboto/300.css';

export default function Root() {
    return (
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
          <Link 
            variant="h4"
            color="primary"
            underline="none" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
            component={RouterLink} to={`Stopwatch`}>
            Stopwatch
            <IconButton color="primary">
                <TimerIcon />
            </IconButton>
          </Link>
          <Link variant="h4"
            color="primary"
            underline="none"
            sx={{ display: 'flex', alignItems: 'center' }}
            component={RouterLink}to={`StudentInfo`}>
            Student Info
            <IconButton color="primary">
                <InfoIcon />
            </IconButton>
          </Link>
      </Box>
    );
}