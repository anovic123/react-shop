import { useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  return !!isLogged;
}

const getWindowWidth = () => {
  const { innerWidth: windowWidth } = typeof window !== 'undefined'
  ? window
  : { innerWidth: 0 }

  return { windowWidth }
}

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  const handleResize = () => setWindowWidth(getWindowWidth());

  useEffect(() => {
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { windowWidth, handleResize };
}

export const useMediaQuery = (maxWidth: number) => {
  const { windowWidth: { windowWidth }, handleResize } = useWindowWidth();
  const [isMedia, setIsMedia] = useState(false);

  useEffect(() => {
      if (windowWidth <= maxWidth) {
          setIsMedia(true);
      } else {
          setIsMedia(false);
      }
  }, [handleResize, maxWidth, windowWidth]);

  return isMedia;
}