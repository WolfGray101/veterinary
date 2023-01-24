import { useState } from 'react';

import classes from '../../styles/Input.module.scss';
import searchIcon from './search-icon.svg';

export interface IProps {
  icon?: boolean,
}

function Input({ icon = false } : IProps) {
  const [value, setValue] = useState<string>('');

  const viewIcon = icon ? <img className={classes.inputContainer__icon} src={searchIcon} alt="search icon" /> : null;

  return (
    <div className={classes.inputContainer}>
      {viewIcon}
      <input
        className={classes.inputContainer__input}
        type="text"
        value={value}
        onChange={(event) => setValue(() => event.target.value)}
      />
    </div>
  );
}

export default Input;

// Вопрос по хранению иконки
