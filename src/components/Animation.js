import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import { motion } from 'framer-motion';

import success from '../svg/true.json';
import failure from '../svg/false.json';

export const SUCCESSFUL = 'successful';
export const FAILURE = 'failure';
export default function Animation({ animation }) {
  const container = React.createRef();

  useEffect(() => {
    let animationData;

    switch (animation) {
      case SUCCESSFUL:
        animationData = success;
        break;
      case FAILURE:
        animationData = failure;
        break;
    }

    const anim = lottie.loadAnimation({
      container: container.current,
      animationData,
      loop: false,
      rendererSettings: {
        className: 'w-75 mx-auto  ',
      },
    });

    return anim.destroy;
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
      className={'d-flex align-items-center justify-content-center '
      + 'position-fixed top-0 bottom-0 start-0 end-0 '
      + 'bg-primary'}
      style={{ zIndex: 999 }}
    />
  );
}
