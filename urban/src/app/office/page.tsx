import ClientNavbar from '@/shared/components/navbar/ClientNavbar';
import styles from './page.module.css';
import Sidebar from '@/features/office/sidebar/Sidebar';
import Content from '@/features/office/content/Content';

export default function OfficePage() {
  return (
    <div className={styles.container}>
      <ClientNavbar />

      <div className={styles.main}>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
