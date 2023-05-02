import { useEffect } from 'react';

const useParallax = (selector, imageSrc) => {
  useEffect(() => {
    const parallaxImage = document.querySelector(selector);
    parallaxImage.style.backgroundImage = `url(${imageSrc})`;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      parallaxImage.style.transform = `translate3d(0, ${scrollTop * 0.5}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selector, imageSrc]);
};

export default useParallax;
