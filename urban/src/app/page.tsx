import FloatingDashboard from '@/features/map/floating/FloatingDashboard';
import MapComponent from '@/features/map/MapComponents';
import MapNavbar from '@/features/map/navbar/MapNavbar';
import SearchPanel from '@/features/map/search/SearchSection';

import styles from './page.module.css';

export default function MapPage() {
  return (
    <div className={styles.container}>
      <MapNavbar />

      <div className={styles.main}>
        <MapComponent />

        <div className={styles.floating}>
          <SearchPanel />
          <FloatingDashboard />
        </div>
      </div>
    </div>
  );
}
