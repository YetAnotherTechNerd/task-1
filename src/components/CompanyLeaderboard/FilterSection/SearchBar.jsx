import React from 'react';
import { SearchBox } from '@fluentui/react-components';

const SearchBar = ({ value, onChange }) => {
  return (
    <div style={{ flex: '1', minWidth: '220px' }}>
      <SearchBox
        id="search-bar"
        value={value}
        onChange={(_e, data) => onChange(data.value)}
        placeholder="Search employee..."
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default SearchBar;
