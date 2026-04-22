import styles from './MapNavbar.module.css';

import {
  map24,
  fileReport24,
  signOut24,
  mapContents24,
  organization24,
} from '@esri/calcite-ui-icons';

const icons = {
  office: organization24,
  parcel: map24,
  zone: mapContents24,
  report: fileReport24,
};

type NavButtonProps = {
  label: string;
  icon: keyof typeof icons;
};

const navbuttons: NavButtonProps[] = [
  { label: 'Office', icon: 'office' },
  { label: 'Parcel Map', icon: 'parcel' },
  { label: 'Land Zone', icon: 'zone' },
  { label: 'Report', icon: 'report' },
];

export default function MapNavbar() {
  return (
    <nav className={styles.container}>
      <h1 className="text-xl font-bold">Urban Lands</h1>

      <div className={styles['navigation-buttons']}>
        {navbuttons.map((nav) => (
          <>
            <div className="navbar-button">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d={icons[nav.icon]} />
              </svg>
              <span className="text-sm mt-1">{nav.label}</span>
            </div>
          </>
        ))}
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
