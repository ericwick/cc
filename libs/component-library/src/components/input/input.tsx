import { FC, ChangeEvent } from 'react';
import classname from 'classnames';
import './input.scss';

export interface ccInput {
  // accept?: null; // only valid for file input type, defines selectable file types
  // alt?: string; // only valid for image input type, required for accessibility
  // autocomplete?: null;
  // checked?: boolean;
  // dirname?: string;
  disabled?: boolean; // makes the input disabled
  // error?: boolean;
  // form?: boolean;
  // formaction?: null;
  // formenctype?: null;
  // formmethod?: null;
  // formonvalidate?: null;
  // formtarget?: null;
  fullWidth?: boolean; // makes input the full length of parent container
  helperText?: string; //text used to describe error to better assist user
  id?: string;
  label?: string; // label for the input, necessary for accessibility
  max?: number; // maximum number allowed
  maxlength?: number; // maximum length of input value
  min?: number; // minimum number allowed
  minlength?: number; // minimum length of input value
  multiple?: boolean; // (email or file) means user can enter multiple files or emails
  name?: string; // passed alongside value for form submission
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void; //  handles value changes
  pattern?: string; // regex that the value must pass to be submitted
  placeholder?: string; // provides additional context about input
  readonly?: boolean; // cannot edit value
  required?: boolean; // user must input value
  size?: 'small' | 'normal' | 'large'; // input size
  // src?: null; // only valid for image input type, URL
  step?: number; // specifies interval between numbers
  type?:
    | 'text'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'file'
    | 'tel'
    | 'time'
    | 'url'
    | 'week'
    | 'date';
  value?: any;
}

export const Input: FC<ccInput> = props => {
  const inputStyle = classname('input__field', {
    'input__field--full-width': props.fullWidth,
    'input__field--small': props.size === 'small',
    'input__field--large': props.size === 'large',
  });

  return (
    <div className="input">
      <input
        className={inputStyle}
        disabled={props.disabled}
        id={props.id}
        max={props.max}
        maxLength={props.maxlength}
        min={props.min}
        minLength={props.minlength}
        multiple={props.multiple}
        name={props.name}
        onChange={props.onChange}
        pattern={props.pattern}
        placeholder={props.placeholder}
        required={props.required}
        readOnly={props.readonly}
        step={props.step}
        type={props.type}
        value={props.value}
      />
      {props.label ? (
        <label htmlFor={props.id} className="input__label">
          {props.label}
        </label>
      ) : null}
      {props.helperText ? (
        <p className="input__helper-text">{props.helperText}</p>
      ) : null}
    </div>
  );
};

export default Input;
