import './input.scss';

/* eslint-disable-next-line */
export interface InputProps {
  accept?: null;
  alt?: string;
  autocomplete?: null;
  checked?: boolean;
  dirname?: string;
  disabled?: boolean;
  form?: boolean;
  formaction?: null;
  formenctype?: null;
  formmethod?: null;
  formonvalidate?: null;
  formtarget?: null;
  id?: string;
  label?: string;
  max?: number;
  maxlength?: number;
  min?: number;
  minlength?: number;
  multiple?: boolean;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: null;
  src?: null;
  step?: null;
  type?: 'text' | 'email' | 'number';
  value?: any;
}

export function Input(props: InputProps) {
  return (
    <label htmlFor={props.id}>
      {props.label}
      <input
        id={props.id}
        alt={props.alt}
        className="input"
        name={props.name}
        value={props.value}
        type={props.type}
        maxLength={props.maxlength}
        minLength={props.minlength}
        checked={props.checked}
        placeholder={props.placeholder}
        required={props.required}
        pattern={props.pattern}
        readOnly={props.readonly}
        disabled={props.disabled}
        dir-name={props.dirname}
      />
    </label>
  );
}

export default Input;
