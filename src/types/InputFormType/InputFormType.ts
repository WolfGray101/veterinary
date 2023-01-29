export interface IInputProps {
  label: string;
  name: string;
  type?: string;
  error?: string;
  touched?: boolean;
  labelClassName?: string;
  inputClassName?: string;
  errorMessageClassName?: string;
  inputErrorClassName?: string;
  inputContainerClassName?: string;
  btnToggleVisibilityClassName?: string;
}

export interface ICheckboxProps {
  label: string;
  classNameLabel: string;
  linkLabel?: JSX.Element;
  onChange?: (e: React.ChangeEvent<boolean>) => void;
}
