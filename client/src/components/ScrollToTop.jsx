import { useEffect } from 'preact/hooks';

const ScrollToTop = ({ path }) => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [path]);

  return null;
};

export default ScrollToTop;