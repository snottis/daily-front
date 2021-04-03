import { useState, ChangeEvent } from 'react';

export interface InputHook {
  value: string | number | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  set: React.Dispatch<React.SetStateAction<string | number | null>>;
}

const useInput = (defvalue: string | number | null = null): InputHook => {
  const [value, setValue] = useState(defvalue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange, set: setValue };
};

export default useInput;
