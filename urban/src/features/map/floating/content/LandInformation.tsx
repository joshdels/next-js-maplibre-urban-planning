'use client';

import { useState } from 'react';
import { mockParcels, Parcel, buildLandInformation } from '@/mock/parcels';

import styles from './LandInformation.module.css';

export default function LandInformation() {
  const [selectedParcel, setSelectedParcel] = useState<Parcel>(mockParcels[1]);
  const landInformationData = buildLandInformation(selectedParcel);

  return (
    <div className={styles.container}>
      <h1>Land Information</h1>

      {landInformationData.map((item, index) => (
        <div key={index} className="flex flex-row gap-5 mb-3">
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d={item.icon} />
          </svg>
          <span className="">{item.label}</span>
          <span className="font-semibold">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
