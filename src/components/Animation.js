import React, { useEffect, useState } from 'react';
import lottie from 'lottie-web';
import { motion } from 'framer-motion';

export default function Animation({ animationData, onComplete }) {
  const container = React.createRef();

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      animationData,
      loop: false,
    });

    onComplete && anim.addEventListener('complete', onComplete);
  }, []);

  return (
    <motion.div
      id="true"
      animate="hidden"
      variants={{
        visible: {
          opacity: 1,
          transition: {
            duration: '2s',
          },
        },
        hidden: {
          opacity: 0,
          height: '0',
          transition: {
            delay: 4,
          },
        },
      }}
      ref={container}
      className="position-fixed top-0 bottom-0 start-0 end-0 bg-primary"
      style={{ zIndex: 999 }}
    />
  );
}
