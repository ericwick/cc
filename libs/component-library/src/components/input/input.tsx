import { FC, ChangeEvent } from 'react';
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
  // helperText?: string; //text used to describe error to better assist user
  id?: string;
  label?: string; // label for the input, necessary for accessibility
  // max?: number;
  maxlength?: number; // maximum length of input value
  // min?: number;
  minlength?: number; // minimum length of input value
  // multiple?: boolean; // (email or file) means user can enter multiple files or emails
  name?: string; // passed alongside value for form submission
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void; //  handles value changes
  // pattern?: string; // regex that the value must pass to be submitted
  placeholder?: string; // provides additional context about input
  readonly?: boolean; // cannot edit value
  required?: boolean; // user must input value
  size?: 'small' | 'normal' | 'large'; // input size
  // src?: null; // only valid for image input type, URL
  // step?: null; // validation for numeric input types
  type?: 'text' | 'email' | 'number';
  value?: any;
}

export const Input: FC<ccInput> = props => {
  return (
    <label htmlFor={props.id}>
      {props.label}
      <input
        id={props.id}
        className="input"
        name={props.name}
        value={props.value}
        type={props.type}
        maxLength={props.maxlength}
        minLength={props.minlength}
        placeholder={props.placeholder}
        required={props.required}
        readOnly={props.readonly}
        disabled={props.disabled}
        onChange={props.onChange}
      />
    </label>
  );
};

export default Input;
