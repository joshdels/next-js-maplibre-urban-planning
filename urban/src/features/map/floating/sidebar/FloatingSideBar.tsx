'use client';

import { clearSelection24, download24, exclamationMarkTriangle24, legend24, plans24, waterDrop24 } from '@esri/calcite-ui-icons';
import { useTabStore } from '@/store/useTabStore';
import styles from './FloatingSideBar.module.css';

interface NavigationProps {
  label: string;
  tab: string;
  icon: string;
}

const navigations: NavigationProps[] = [
  { label: 'Overview', tab: 'overview', icon: clearSelection24 },
  { label: 'Legend', tab: 'legend', icon: legend24 },
  { label: 'Boundaries', tab: 'boundaries', icon: plans24 },
  { label: 'Hazard', tab: 'hazard', icon: exclamationMarkTriangle24 },
  { label: 'Download', tab: 'download', icon: download24 },
];

export default function FloatingSideBar() {
  const { handleTabClick, activeTab } = useTabStore();

  return (
    <div className={styles.container}>
      {navigations.map((nav) => {
        const isActive = activeTab === nav.tab;

        return (
          <button
            key={nav.label}
            className={`floating-button ${isActive ? 'active' : ''}`}
            onClick={() => handleTabClick(nav.tab)}
          >
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d={nav.icon} />
            </svg>

            <span className="font-medium">{nav.label}</span>
          </button>
        );
      })}
    </div>
  );
}
