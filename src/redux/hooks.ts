import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useEffect, useState } from "react";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

type IDebunce = {
  searchTerm: string;
  delay: number;
};

export const useDebounce = ({ searchTerm, delay }: IDebunce) => {
  const [debunceValue, setDebunceValue] = useState(searchTerm);
  useEffect(() => {
    const handleDebunce = setTimeout(() => {
      setDebunceValue(searchTerm);
    }, delay);

    return () => {
      clearTimeout(handleDebunce);
    };
  }, [searchTerm, delay]);
  return debunceValue;
};
