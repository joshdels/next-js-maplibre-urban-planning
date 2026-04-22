import styles from './FloatingSideBar.module.css';

import { clearSelection24, plans24, waterDrop24 } from '@esri/calcite-ui-icons';

export interface NavigationProps {
  label: string;
  icon: string;
}

const navigations: NavigationProps[] = [
  { label: 'Overview', icon: clearSelection24 },
  { label: 'Boundaries', icon: plans24 },
  { label: 'Water', icon: waterDrop24 },
];

export default function FloatingSideBar() {
  return (
    <div className={styles.container}>
      {navigations.map((nav) => (
        <div
          key={nav.label}
          className="floating-button"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d={nav.icon} />
          </svg>

          <span className="font-medium">{nav.label}</span>
        </div>
      ))}
    </div>
  );
}
