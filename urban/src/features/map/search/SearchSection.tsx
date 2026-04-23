'use client';

import { useState } from 'react';
import { search24 } from '@esri/calcite-ui-icons';
import styles from './SearchSection.module.css';
import { useTabStore } from '@/store/useTabStore';

export default function SearchPanel() {
  const { isOpen, setIsOpen, setActiveTab } = useTabStore();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  const handleFocus = () => {
    setActiveTab('overview');
    setIsOpen(true);
  };

  return (
    <div
      className={`${styles['search-panel']} ${
        isOpen ? styles.open : styles.closed
      }`}
    >
      <input
        type="text"
        placeholder={`${isOpen ? "Search by Parcel ID" : "Search"}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={handleFocus}
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
