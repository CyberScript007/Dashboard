import { useEffect, useState } from "react";

function useLocalStorage(keyItem, intialValue) {
  const [value, setValue] = useState(() => {
    const getValue = localStorage.getItem(keyItem);
    return getValue ? getValue : intialValue;
  });

  useEffect(() => {
    localStorage.setItem(keyItem, value);
  }, [keyItem, value, setValue]);

  return [value, setValue];
}

export default useLocalStorage;
