'use client';

import { useMapStore } from '@/store/useMapStore';
import styles from './MapControls.module.css';
import { extendTrim24, extent24, minus24, plus24, user24 } from '@esri/calcite-ui-icons';

type Props = {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomToBounds: () => void;
};

export default function MapControls({
  onZoomIn,
  onZoomOut,
  onZoomToBounds,
}: Props) {
  const { latitude, longitude } = useMapStore();

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.info}>
          <div className={styles['brand']}>
            <h1 className={styles.title}>TopMap</h1>
            <span className={styles.solution}>Solutions</span>
          </div>

          <div className={styles.coords}>
            {latitude && longitude
              ? `${latitude}, ${longitude}`
              : '0.0000, 0.0000'}
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.zoom}>
            <button className={styles['zoom-top']} onClick={onZoomIn}>
              <svg className="icon-map" viewBox="0 0 24 24" fill="currentColor">
                <path d={plus24} />
              </svg>
            </button>
            <button className={styles['zoom-bot']} onClick={onZoomOut}>
              <svg className="icon-map" viewBox="0 0 24 24" fill="currentColor">
                <path d={minus24} />
              </svg>
            </button>
          </div>
          <button className={styles.btn} onClick={onZoomToBounds}>
            <svg className="icon-map" viewBox="0 0 24 24" fill="currentColor">
              <path d={extent24} />
            </svg>
          </button>
          <button className={styles.btn}>3D</button>
        </div>
      </div>
    </>
  );
}
