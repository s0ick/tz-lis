import {useEffect, useState} from 'react';
import debounce from 'lodash/debounce';

export const useElementWidth = (element: Element | null, delay: number = 700) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (element) {
      setWidth(element && (element.getBoundingClientRect().width || 0));
    }
  }, [element]);

  useEffect(() => {
    if (element) {
      const handleResize = () => {
        setWidth(element && (element.getBoundingClientRect().width || 0));
      };
      const debouncedHandleResize = debounce(handleResize, delay);
      window.addEventListener('resize', debouncedHandleResize);
      return () => {
        window.removeEventListener('resize', debouncedHandleResize);
      };
    }
  }, [delay, element]);

  return width;
}
