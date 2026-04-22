import { x24 } from '@esri/calcite-ui-icons';
import FloatingSideBar from './FloatingSideBar';
import OwnerInformation from './OwnerInformation';
import LandInformation from './LandInformation';
import styles from './FloatingDashboard.module.css';

export default function FloatingDashboard() {
  return (
    <div className={styles.container}>
      <aside className={styles['floating-sidebar']}>
        <FloatingSideBar />
      </aside>

      <main className={styles['floating-main']}>
        <section className={styles['floating-heading']}>
          <h1 className="font-large">Parcel Overview</h1>
          <div className="btn-close">
            <svg className="" viewBox="0 0 24 24" fill="currentColor">
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
