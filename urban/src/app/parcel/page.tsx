import FloatingDashboard from '@/features/map/floating/sidebar/FloatingDashboard';
import MapComponent from '@/features/map/MapComponents';
import SearchPanel from '@/features/map/search/SearchSection';

import styles from './page.module.css';
import ClientNavbar from '@/shared/components/navbar/ClientNavbar';

export default function MapPage() {
  return (
    <div className={styles.container}>
      <ClientNavbar />

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
