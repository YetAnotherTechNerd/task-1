import React from 'react';

/**
 * Reusable base dropdown component.
 *
 * @param {string}   id           - Input id (also used for label htmlFor)
 * @param {string}   label        - Visible label text
 * @param {Array}    options       - Array of option values
 * @param {*}        value         - Currently selected value (null means "placeholder")
 * @param {function} onChange      - Called with the new value (or null when placeholder selected)
 * @param {string}   placeholder   - Placeholder option text
 * @param {boolean}  disabled      - Disables the select element
 * @param {string}   className     - Additional CSS classes for the wrapper div
 */
const Dropdown = ({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = 'Select…',
  disabled = false,
  className = '',
}) => {
  const handleChange = (e) => {
    const selected = e.target.value;
    onChange(selected === '' ? null : selected);
  };

  const labelStyle = {
    fontSize: 'var(--fontSizeBase100)',
    fontWeight: 'var(--fontWeightSemibold)',
    color: 'var(--colorNeutralForeground3)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    lineHeight: 'var(--lineHeightBase100)',
  };

  const selectStyle = {
    display: 'block',
    width: '100%',
    borderRadius: 'var(--borderRadiusLarge)',
    border: `var(--strokeWidthThin) solid var(--colorNeutralStroke1)`,
    backgroundColor: 'var(--colorNeutralBackground3)',
    color: 'var(--colorNeutralForeground1)',
    padding: `var(--spacingVerticalS) var(--spacingHorizontalM)`,
    fontSize: 'var(--fontSizeBase300)',
    boxShadow: 'var(--shadow2)',
    transition: 'all var(--durationNormal) var(--curveEaseEase)',
    fontFamily: 'var(--fontFamilyBase)',
    fontWeight: 'var(--fontWeightRegular)',
    outline: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
  };

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacingVerticalXS)',
  };

  return (
    <div style={wrapperStyle} className={className}>
      {label && (
        <label
          htmlFor={id}
          style={labelStyle}
        >
          {label}
        </label>
      )}
      <select
        id={id}
        value={value ?? ''}
        onChange={handleChange}
        disabled={disabled}
        style={selectStyle}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--colorBrandStroke1)';
          e.target.style.boxShadow = '0 0 0 2px var(--colorBrandBackground2)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'var(--colorNeutralStroke1)';
          e.target.style.boxShadow = 'var(--shadow2)';
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
