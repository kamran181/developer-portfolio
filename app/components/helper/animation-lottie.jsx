"use client"

import { useEffect, useState } from 'react';

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  if (!isClient) {
    // Show a loading placeholder during SSR
    return (
      <div className="w-full h-64 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  // Only render Lottie on client side
  const Lottie = require("lottie-react").default;
  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;