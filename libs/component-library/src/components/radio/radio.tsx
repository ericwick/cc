import styles from './radio.module.scss';

/* eslint-disable-next-line */
export interface RadioProps {}

export function Radio(props: RadioProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Radio!</h1>
    </div>
  );
}

export default Radio;
