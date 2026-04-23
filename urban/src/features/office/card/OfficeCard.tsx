import { OfficeProps } from '@/mock/offices';
import styles from './OfficeCard.module.css';
import { user24 } from '@esri/calcite-ui-icons';

export default function OfficeCard({
  name,
  category,
  contributors,
}: OfficeProps) {
  return (
    <>
      <div className={styles['card-container']}>
        <aside>Logo</aside>
        <main>
          <h1 className="font-semibold">{name}</h1>

          <div className={styles['tag-container']}>
            {category.map((item, index) => (
              <div className={styles.tags} key={index}>
                {item}
              </div>
            ))}
          </div>

          <div className={styles.contributors}>
            <svg className="icon-blue" viewBox="0 0 24 24" fill="currentColor">
              <path d={user24} />
            </svg>
            <h2>Contributors</h2>
          </div>
          {contributors.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </main>
      </div>
    </>
  );
}
