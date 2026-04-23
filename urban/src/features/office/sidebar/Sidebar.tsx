'use client';

import { sidebuttons, icons } from '@/mock/navigation';
import { LuSquareChevronLeft, LuSquareChevronRight } from 'react-icons/lu';
import { useSidebarStore } from '@/store/useSidebarStore';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const { isOpen, handleSidebarClick, toggleSidebarOpen } = useSidebarStore();

  return (
    <>
      <div
        className={`${isOpen ? styles['sidebar-container-open'] : styles['sidebar-container']}`}
      >
        <aside className={styles['top-section']}>
          <button
            className={`${isOpen ? styles['marker-open'] : styles.none}`}
            onClick={toggleSidebarOpen}
          >
            <LuSquareChevronLeft className="icon" />
          </button>
          <button
            onClick={toggleSidebarOpen}
            className={`${isOpen ? styles.none : styles.marker}`}
          >
            <LuSquareChevronRight className="icon" />
          </button>
          <div
            className={`${isOpen ? styles['top-content-open'] : styles['top-content']}`}
          >
            <h1 className="font-large">Tagum City</h1>
            <p>Davao del Norte</p>
          </div>
        </aside>

        <main className={styles.main}>
          {sidebuttons.map((button, index) => (
            <button
              className={styles['buttons']}
              key={index}
              onClick={() => handleSidebarClick(button.label)}
            >
              <svg className="icon" fill="currentColor">
                <path d={icons[button.icon]} />
              </svg>
              <div className={!isOpen ? styles.none : ''}>{button.label}</div>
            </button>
          ))}
        </main>

        <aside className={`${isOpen ? styles['brand-open'] : styles['brand']}`}>
          <h1>All your spatial data. Finally, one your people trust</h1>
          <p className="font-medium">TopMap Solutions</p>
          <span>Visit Website</span>
        </aside>
      </div>
    </>
  );
}
