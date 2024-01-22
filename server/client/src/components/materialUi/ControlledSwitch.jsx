import React from 'react';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
export default function ControlledSwitches({ isRead, changeRead }) {
  const handleChange = (event) => {
    changeRead(event.target.checked);
  }
  return (
    <>
      {isRead ? 'Read' : 'Not read'}
    <Switch
      checked={isRead}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      />
      </>
  );
}