import styles from './Sidbar.module.css';
import { LuSquareChevronLeft } from 'react-icons/lu';

export default function Sidebar() {
  return (
    <>
      <div className={styles['sidebar-container']}>
        <aside>
          <LuSquareChevronLeft  className='icon'/>
        </aside>
        <main></main>
        <aside></aside>
      </div>
    </>
  );
}
