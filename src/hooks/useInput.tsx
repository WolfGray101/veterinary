import React, { useState } from 'react';

export interface IUseInput {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  reset: () => void,
}

function useInput(initialValue: string): IUseInput {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(() => event.target.value);

  const reset = () => {
    setValue(() => '');
  };

  return {
    value,
    onChange,
    reset,
  };
}

export default useInput;
