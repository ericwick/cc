import styles from './dropdown.module.scss';

/* eslint-disable-next-line */
export interface DropdownProps {}

export function Dropdown(props: DropdownProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Dropdown!</h1>
    </div>
  );
}

export default Dropdown;
