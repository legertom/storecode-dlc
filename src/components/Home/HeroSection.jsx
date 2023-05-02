import './HeroSection.css';
import useParallax from '../../hooks/useParallax';

const HeroSection = () => {
    const parallaxImageSrc = 'path/to/parallax-background-image.jpg';
    useParallax('.parallax-image', parallaxImageSrc);
  
    return (
      <header className="container-fluid hero-section">
        {/* HeroSection content */}
      </header>
    );
  };
  
  export default HeroSection;