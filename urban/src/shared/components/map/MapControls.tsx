'use client';
import { useMapStore } from '@/store/useMapStore';
import styles from './MapControls.module.css';

type Props = {
  onZoomIn: () => void;
  onZoomOut: () => void;
};

export default function MapControls({ onZoomIn, onZoomOut }: Props) {
  const { latitude, longitude } = useMapStore();

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.info}>
          <div className={styles['brand']}>
            <h1 className={styles.title}>TopMap</h1>
            <span className={styles.dot}>Solutions</span>
          </div>

          <div className={styles.coords}>
            {latitude && longitude ? `${latitude}, ${longitude}` : '0.0000, 0.0000' }
          </div>
        </div>

        <div className={styles.controls}>
          <button className={styles.btn}>C</button>
          <div className={styles.zoom}>
            <button className={styles['zoom-top']} onClick={onZoomIn}>
              +
            </button>
            <button className={styles['zoom-bot']} onClick={onZoomOut}>
              -
            </button>
          </div>
          <button className={styles.btn}>⛶</button>
          <button className={styles.btn}>3D</button>
        </div>
      </div>
    </>
  );
}
