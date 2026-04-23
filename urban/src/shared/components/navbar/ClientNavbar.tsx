'use client';

import { signOut24 } from '@esri/calcite-ui-icons';
import { navbuttons, icons } from '@/mock/navigation';
import { useNavStore } from '@/store/useNavStore';

import styles from './ClientNavbar.module.css';
import Link from 'next/link';

export default function ClientNavbar() {
  const { activeNav, handleNavClick } = useNavStore();

  return (
    <nav className={styles.container}>
      <h1 className="text-xl font-bold">Urban Lands</h1>

      <div className={styles['navigation-buttons']}>
        {navbuttons.map((nav, index) => (
          <Link
            href={nav.route ?? '/'}
            className={`navbar-button ${activeNav === nav.label ? 'active' : ''}`}
            key={index}
            onClick={() => handleNavClick(nav.label)}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d={icons[nav.icon]} />
            </svg>
            <span className="text-sm mt-1">{nav.label}</span>
          </Link>
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
