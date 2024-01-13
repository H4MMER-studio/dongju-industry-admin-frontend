import React, { useEffect } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectLabelsProps {
  options: { name: string; field: string }[];
  onClickOption?: (option: string) => void;
}

const Layout = styled.div`
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

const SelectLabels: React.FC<SelectLabelsProps> = ({
  options,
  onClickOption,
}) => {
  const [age, setAge] = React.useState(options[0].field);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    onClickOption && onClickOption(event.target.value);
  };

  return (
    <Layout>
      <FormControl
        sx={{
          m: 1,
          minHeight: '100%',
          margin: 0,
          height: '100%',
          border: 'none',
        }}
        style={{ border: 'none' }}
      >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          defaultValue={options[0]?.field}
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ width: '100%', height: '100%', padding: 0, border: 'none' }}
          style={{ border: 'none' }}
        >
          {options.map((option) => (
            <MenuItem key={option.name} value={option.field}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Layout>
  );
};

export default SelectLabels;
