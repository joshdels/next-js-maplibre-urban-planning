import { OfficeProps } from '@/mock/offices';
import styles from './OfficeCard.module.css';
import { user24 } from '@esri/calcite-ui-icons';
import { FaEdit, FaMap, FaTrash } from 'react-icons/fa';
import Link from 'next/link';

export default function OfficeCard({
  name,
  logo,
  category,
  contributors,
}: OfficeProps) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles['card-container']}>
          <aside>
            <img src={logo}></img>
          </aside>
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
              <svg
                className="icon-blue"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d={user24} />
              </svg>
              <h2>Contributors</h2>
            </div>
            <div className={styles.list}>
              {contributors.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
          </main>
        </div>
        <div className={styles['card-footer']}>
          <button className={styles['icon-btn']}>
            <FaEdit />
            <span>Edit</span>
          </button>
          <Link className={styles['icon-btn']} href={'/test'}>
            <FaMap />
            <span>Map View</span>
          </Link>
          <button className={styles['icon-btn']}>
            <FaTrash />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </>
  );
}
