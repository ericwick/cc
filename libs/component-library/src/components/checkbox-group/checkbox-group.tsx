import styles from './checkbox-group.module.scss';

/* eslint-disable-next-line */
export interface CheckboxGroupProps {}

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CheckboxGroup!</h1>
    </div>
  );
}

export default CheckboxGroup;
