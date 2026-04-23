import { organization24 } from '@esri/calcite-ui-icons';
import OfficeCard from '../card/OfficeCard';
import styles from './Content.module.css';
import { offices } from '@/mock/offices';

export default function Content() {
  return (
    <>
      <div className={styles.container}>
        {offices?.map((item, index) => (
          <OfficeCard key={index} {...item} />
        ))}
        <div className={styles['container-new']}>
          <svg className="icon-lg" viewBox="0 0 24 24" fill="currentColor">
            <path d={organization24} />
          </svg>
          <h1>+ Add New Office</h1>
        </div>
      </div>
    </>
  );
}
