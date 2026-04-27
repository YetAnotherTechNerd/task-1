import React from 'react';
import Dropdown from '../../common/Dropdown';

const YearDropdown = ({ years, selected, onChange }) => (
  <Dropdown
    id="year-dropdown"
    options={years}
    value={selected}
    onChange={(val) => onChange(val ? Number(val) : null)}
    placeholder="All Years"
  />
);

export default YearDropdown;
