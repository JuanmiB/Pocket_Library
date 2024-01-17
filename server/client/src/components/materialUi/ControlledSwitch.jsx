import React from 'react';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
export default function ControlledSwitches() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      {checked ? 'Read' : 'Not read'}
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      />
      </>
  );
}