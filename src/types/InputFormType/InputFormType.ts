export interface IInputProps {
  label: string;
  name: string;
  type?: string;
  error?: string;
  touched?: boolean;
}

export interface ICheckboxProps {
  label: string;
  error?: string;
  touched?: boolean;
  linkLabel?: JSX.Element;
  onChange?: (e: React.ChangeEvent<boolean>) => void;
}
