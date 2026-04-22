'use client';

import { useState } from 'react';
import { owners, OwnerProps, buildOwnerInformation } from '@/mock/owner';
import styles from './OwnerInformation.module.css';

export default function OwnerInformation() {
  const [selectedOwner, setSelectOwner] = useState<OwnerProps>(owners[0]);
  const ownerData = buildOwnerInformation(selectedOwner);

  return (
    <div className={styles.container}>
      <h1>Owner Information</h1>

      {ownerData.map((item, index) => (
        <div key={index} className={styles["data-content"]}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
            <path d={item.icon} />
          </svg>
          <span className="font-semibold">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
