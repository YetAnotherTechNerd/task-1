import React from 'react';
import Dropdown from '../../common/Dropdown';

const QuarterDropdown = ({ quarters, selected, onChange, disabled }) => (
  <Dropdown
    id="quarter-dropdown"
    options={quarters}
    value={selected}
    onChange={onChange}
    placeholder="All Quarters"
    disabled={disabled}
  />
);

export default QuarterDropdown;
