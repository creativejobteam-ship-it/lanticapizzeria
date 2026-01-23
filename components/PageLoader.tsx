import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageLoader: React.FC = () => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Trigger animation on route change
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1200); // Animation duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col justify-end">
      {/* Container for the wave and fill */}
      <div className="w-full h-[120%] absolute bottom-0 left-0 animate-wave-sweep translate-y-full">
        
        {/* The Wave Shape (Top of the liquid) */}
        <div className="w-full h-24 md:h-48 relative -top-1">
             <svg className="w-full h-full text-mazzo-green fill-current" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>

        {/* The Solid Fill (Body of the liquid) */}
        <div className="w-full h-full bg-mazzo-green"></div>
      </div>

      <style>{`
        @keyframes waveSweep {
          0% {
            transform: translateY(100%);
          }
          40% {
            transform: translateY(0%);
          }
          60% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        .animate-wave-sweep {
          animation: waveSweep 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default PageLoader;