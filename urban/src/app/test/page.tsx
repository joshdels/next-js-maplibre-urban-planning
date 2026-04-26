import MapOffice from '@/features/office/mapView/map/MapOffice';
import Sidebar from '@/features/office/mapView/sidebar/Sidebar';
import styles from './page.module.css';

export default function MapView() {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <MapOffice />
      </div>
    </>
  );
}
