import React from 'react';
import Dropdown from '../../common/Dropdown';

const YearDropdown = ({ years, selected, onChange }) => (
  <Dropdown
    label="Year"
    options={years.map(String)}
    value={selected ? String(selected) : null}
    onChange={(val) => onChange(val ? Number(val) : null)}
    placeholder="All Years"
    className="w-32"
  />
);

export default YearDropdown;
