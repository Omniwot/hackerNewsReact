import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({
  handleSelect, values, filter, label, defaultValue,
}) {
  const [selectedVal, setSelectedVal] = React.useState(defaultValue);
  const handleChange = (event) => {
    setSelectedVal(event.target.value);
  };
  React.useEffect(() => {
    handleSelect(selectedVal);
  }, [selectedVal]);
  return (
    <Box sx={{ minWidth: '8rem', m: '0.2rem' }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">{label}</InputLabel>
        <Select
          sx={{ height: '2rem' }}
          labelId="simple-select-label"
          id="simple-select"
          defaultValue={defaultValue}
          value={selectedVal}
          label={filter}
          onChange={handleChange}
        >
          {values.map((valueTemp) => (<MenuItem value={valueTemp}>{valueTemp}</MenuItem>))}
        </Select>
      </FormControl>
    </Box>
  );
}
