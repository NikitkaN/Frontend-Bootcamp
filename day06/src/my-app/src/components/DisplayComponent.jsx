import { Typography } from '@mui/material';
import React from 'react';

export default function DisplayComponent(props) {
  return (
    <Typography variant='h2'>
      {props.time.h > 0 && `${props.time.h}:`}
      {props.time.m >= 10 ? props.time.m : `0${props.time.m}`}&nbsp;:&nbsp;
      {props.time.s >= 10 ? props.time.s : `0${props.time.s}`}&nbsp;:&nbsp;
      {props.time.ms >= 10 ? props.time.ms : `0${props.time.ms}`}
    </Typography>
  );
}