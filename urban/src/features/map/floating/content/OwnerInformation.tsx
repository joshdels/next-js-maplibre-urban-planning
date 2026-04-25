'use client';

import { useParcelStore } from '@/store/useParcelStore';
import { buildOwnerInformation } from '@/mock/owner';
import styles from './OwnerInformation.module.css';

export default function OwnerInformation() {
  const parcel = useParcelStore((s) => s.selectedParcel);

  if (!parcel) {
    return;
  }

  const owner = {
    owner: parcel.properties.owner,
    contactNumber: parcel.properties.contact,
    address: parcel.properties.address,
  };

  const ownerData = buildOwnerInformation(owner);

  return (
    <div className={styles.container}>
      <h1>Owner Information</h1>

      {ownerData.map((item, index) => (
        <div key={index} className={styles['data-content']}>
          <svg className="icon-blue" fill="currentColor">
            <path d={item.icon} />
          </svg>

          <div className={styles['data-content']}>
            <span className={styles.label}>{item.label}</span>
            <span className="font-semibold">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
