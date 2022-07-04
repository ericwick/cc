import { FC, MouseEvent, FocusEventHandler } from 'react';
import classname from 'classnames';
import './button.scss';

/* eslint-disable-next-line */
export interface ccButton {
  id?: string;
  name?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void; // handles click events
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  type?: 'primary' | 'secondary' | 'error'; // defaults to 'default'
  size?: 'small' | 'large'; // defaults to 'normal'
  label?: string;
  fullWidth?: boolean;
  variant?: 'text' | 'contained' | 'outlined';
  state?: 'success' | 'error';
  loading?: boolean;
  disabled?: boolean;
  content?: any;
}

export const Button: FC<ccButton> = props => {
  const buttonStyle = classname('button', {
    'button__full-width': props.fullWidth,
    'button__loading': props.loading,
    'button__disabled': props.disabled,
    'button__small': props.size === 'small',
    'button__large': props.size === 'large',
  });

  return (
    <button
      id={props.id}
      className={buttonStyle}
      name={props.name}
      disabled={props.disabled}
      onClick={props.onClick}
      onFocus={props.onFocus}
    >
      {props.content}
    </button>
  );
};

export default Button;
