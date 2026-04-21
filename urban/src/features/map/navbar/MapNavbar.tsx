import styles from './MapNavbar.module.css';

import {
  map24,
  fileReport24,
  signOut24,
  mapContents24,
} from '@esri/calcite-ui-icons';

export default function MapNavbar() {
  return (
    <nav className={styles.container}>
      <h1 className="text-xl font-bold">Urban Lands</h1>

      <div className={styles['navigation-buttons']}>
        <div className="navbar-button">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d={map24} />
          </svg>
          <span className="text-sm mt-1">Parcel Map</span>
        </div>

        <div className="navbar-button">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d={mapContents24} />
          </svg>
          <span className="text-sm mt-1">Land Zone</span>
        </div>

        <div className="navbar-button">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d={fileReport24} />
          </svg>
          <span className="text-sm mt-1">Reports</span>
        </div>
      </div>

      <div className="navbar-button-logout">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d={signOut24} />
        </svg>
        <span className="text-sm mt-1">Logout</span>
      </div>
    </nav>
  );
}
