'use client';

import { useState } from 'react';
import { search24 } from '@esri/calcite-ui-icons';
import styles from './SearchSection.module.css';

export default function SearchPanel() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  return (
    <div className={styles['search-panel']}>
      <input
        type="text"
        placeholder="Search by Parcel ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles['search-input']}
      />

      <button onClick={handleSearch} className={styles['search-button']}>
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
          <path d={search24} />
        </svg>
      </button>
    </div>
  );
}
