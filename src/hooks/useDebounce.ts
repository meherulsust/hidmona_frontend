import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number = 150) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  return debounceValue;
};

export default useDebounce;
