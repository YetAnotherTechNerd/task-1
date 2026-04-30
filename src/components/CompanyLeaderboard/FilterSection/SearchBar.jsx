import React, { useRef, useEffect } from 'react';
import { SearchBox, useId } from '@fluentui/react-components';

const SearchBar = ({ value, onChange }) => {
  const searchBoxRef = useRef(null);

  useEffect(() => {
    const removeClearButton = (element) => {
      if (!element) return;
      const buttons = element.querySelectorAll('button');
      buttons.forEach((btn) => {
        const ariaLabel = btn.getAttribute('aria-label') || '';
        if (ariaLabel.toLowerCase().includes('clear') || ariaLabel.toLowerCase().includes('dismiss')) {
          btn.style.display = 'none';
        } else if (btn.querySelector('svg') && btn.getAttribute('aria-label') === '') {
          const parent = btn.parentElement;
          if (parent && parent.children.length === 1) {
            btn.style.display = 'none';
          }
        }
      });
    };

    const observer = new MutationObserver(() => {
      removeClearButton(searchBoxRef.current);
    });

    if (searchBoxRef.current) {
      removeClearButton(searchBoxRef.current);
      observer.observe(searchBoxRef.current, { childList: true, subtree: true });
    }

    const interval = setInterval(() => {
      removeClearButton(searchBoxRef.current);
    }, 50);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      id="search-bar"
      style={{
        flex: '1',
        minWidth: '220px',
        backgroundColor: 'rgb(235, 235, 237)',
        border: '1px solid #000',
        borderRadius: '0',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <SearchBox
        ref={searchBoxRef}
        value={value}
        onChange={(_e, data) => onChange(data.value)}
        placeholder="Search employee..."
        style={{ width: '100%', border: 'none' }}
      />
    </div>
  );
};

export default SearchBar;
