'use client';

import { useParcelStore } from '@/store/useParcelStore';
import { buildLandInformation, Parcel } from '@/mock/parcels';
import styles from './LandInformation.module.css';

export default function LandInformation() {
  const parcel = useParcelStore((s) => s.selectedParcel);

  if (!parcel) {
    return;
  }

  const mappedParcel: Parcel = {
    parcelId: parcel.properties.parcel_id,
    landUseType: parcel.properties.land_use,
    totalHectares: parcel.properties.Area,
    assessedYear: parcel.properties.assessed_year,
    assessedValue: parcel.properties.value,
    typeOfDeed: parcel.properties.deed,
  };

  const landInformationData = buildLandInformation(mappedParcel);

  return (
    <div className={styles.container}>
      <h1>Land Information</h1>

      {landInformationData.map((item, index) => (
        <div key={index} className={styles['data-content']}>
          <svg className="icon-blue" fill="currentColor">
            <path d={item.icon} />
          </svg>

          <span>{item.label}</span>
          <span className="font-semibold">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
