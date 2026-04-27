import React from 'react';
import {
  Dropdown as DropdownComponent,
  Option,
  makeStyles,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  dropdown: {
    width: '100%',
    minWidth: '0',
  },
});

/**
 * Reusable base dropdown component built on Fluent UI.
 *
 * @param {string}   id           - Input id
 * @param {Array}    options       - Array of option values
 * @param {*}        value         - Currently selected value (null means "placeholder")
 * @param {function} onChange      - Called with the new value (or null when placeholder selected)
 * @param {string}   placeholder   - Placeholder option text shown inside the select
 * @param {boolean}  disabled      - Disables the dropdown
 * @param {string}   className     - Additional CSS class for the wrapper div
 */
const Dropdown = ({
  id,
  options,
  value,
  onChange,
  placeholder = 'Select…',
  disabled = false,
  className = '',
}) => {
  const styles = useStyles();

  const selectedOptions = value != null ? [String(value)] : [];

  const handleOptionSelect = (_e, data) => {
    const selected = data.optionValue;
    onChange(selected === '__placeholder__' ? null : selected);
  };

  return (
    <div className={className} style={{ width: '100%' }}>
      <DropdownComponent
        id={id}
        className={styles.dropdown}
        value={value != null ? String(value) : placeholder}
        selectedOptions={selectedOptions}
        onOptionSelect={handleOptionSelect}
        disabled={disabled}
        placeholder={placeholder}
      >
        {options.map((opt) => (
          <Option key={opt} value={String(opt)}>
            {String(opt)}
          </Option>
        ))}
      </DropdownComponent>
    </div>
  );
};

export default Dropdown;
