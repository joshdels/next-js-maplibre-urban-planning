'use client';

import { x24 } from '@esri/calcite-ui-icons';
import FloatingSideBar from './FloatingSideBar';
import OwnerInformation from '../content/OwnerInformation';
import LandInformation from '../content/LandInformation';
import styles from './FloatingDashboard.module.css';
import { useTabStore } from '@/store/useTabStore';

export default function FloatingDashboard() {
  const { isOpen, handleClose } = useTabStore();

  return (
    <div className={styles.container}>
      <aside
        className={`${styles['floating-sidebar']} ${!isOpen ? styles.close : ''}`}
      >
        <FloatingSideBar />
      </aside>

      <main
        className={`${styles['floating-main']} ${isOpen ? styles.active : ''}`}
      >
        <section className={styles['floating-heading']}>
          <h1 className="font-large">Parcel Overview</h1>
          <div className="btn-close" onClick={handleClose}>
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d={x24} />
            </svg>
          </div>
        </section>
        <section>
          <OwnerInformation />
          <LandInformation />
        </section>
      </main>
    </div>
  );
}
