import React, {useState} from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import DisplayComponent from '../components/DisplayComponent';
import BtnComponent from '../components/BtnComponent';
import SomeList from '../components/SomeList';

export default function Stopwatch() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const timer = document.getElementById('Timer');
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 99){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const add = () => {
    let text = document.createElement('Typography');
    text.classList.add('Text');
    text.innerHTML = time.m + " : " + time.s + " : " + time.ms;
    timer.appendChild(text);
  }

  const clear = () => {
    let text = document.getElementsByClassName('Text');
    while(text.length) {
      text[0].parentNode.removeChild(text[0]);
    }
  }

  const resume = () => start();

  return (
    <Box 
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={3}
      height="100vh">
        <Button
          component={Link} 
          to="/" 
          variant="contained" 
          color="primary" 
          sx={{ alignSelf: 'flex-start', mb: 2 }}>
            &lt; Back
        </Button>
        <Box display="flex" justifyContent="center" alignItems="center">
            <Box>
              <Box textAlign="center">
                <DisplayComponent time={time} />
                <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start} />
                <SomeList time={time} add={add} clear={clear} />
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={2} id="Timer"/>
              </Box>
            </Box>
      </Box>
    </Box>
  )
}