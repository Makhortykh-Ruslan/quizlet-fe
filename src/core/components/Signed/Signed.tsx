import styles from './Signed.module.scss';
import { JSX } from 'react';

const Signed: () => JSX.Element = () => {
  return (
    <div className={styles.component}>
      Developed by
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ruslan-makhortykh-a0141519a/"
      >
        Makhortykh Ruslan
      </a>
    </div>
  );
};

export default Signed;
