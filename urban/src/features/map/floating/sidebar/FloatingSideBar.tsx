"use client"

import { clearSelection24, plans24, waterDrop24 } from '@esri/calcite-ui-icons';
import { useTabStore } from '@/store/useTabStore';
import styles from './FloatingSideBar.module.css';

interface NavigationProps {
  label: string;
  icon: string;
}

const navigations: NavigationProps[] = [
  { label: 'Overview', icon: clearSelection24 },
  { label: 'Boundaries', icon: plans24 },
  { label: 'Water', icon: waterDrop24 },
];

export default function FloatingSideBar() {
  const { isOpen, setIsOpen, activeTab } = useTabStore();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      {navigations.map((nav) => (
        <div key={nav.label} className="floating-button">
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d={nav.icon} />
          </svg>

          <span className="font-medium">{nav.label}</span>
        </div>
      ))}

      
    </div>
  );
}
