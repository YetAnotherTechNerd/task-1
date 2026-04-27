import React from 'react';
import Dropdown from '../../common/Dropdown';

const QuarterDropdown = ({ quarters, selected, onChange, disabled }) => (
  <Dropdown
    id="quarter-dropdown"
    label="Quarter"
    options={quarters}
    value={selected}
    onChange={onChange}
    placeholder="Select Quarter"
    disabled={disabled}
  />
);

export default QuarterDropdown;
