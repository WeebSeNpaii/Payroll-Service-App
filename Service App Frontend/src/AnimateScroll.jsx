import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const useAnimateOnScroll = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return [ref, hasAnimated];
};

export default useAnimateOnScroll;
