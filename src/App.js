import React, { useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SamuraiSection from './components/SamuraiSection';
import StatsSection from './components/StatsSection';
import ExteriorSection from './components/ExteriorSection';
import InteriorSection from './components/InteriorSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ClickSpark from './components/ClickSpark';
import './App.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section-animate');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Memoize product data to prevent recreation on every render
  const exteriorProducts = useMemo(() => [
    {
      title: "Blind Spot Monitor",
      image: "https://shokonauto.com/wp-content/uploads/2023/10/mirror-01.png",
      description: "Blind Spot Monitor system cautions a Driver if there is a vehicle in the vicinity and that he cannot view in either of the mirrors."
    },
    {
      title: "Tire Inflator",
      image: "https://shokonauto.com/wp-content/uploads/2023/10/fixed-01.jpg",
      description: "A car appliance of multiple utility. For the Off-roader and Desert driver a blessing; deflate and inflate tyres anytime, anywhere."
    },
    {
      title: "360 Camera",
      image: "https://shokonauto.com/wp-content/uploads/2023/10/360-Camera-04.jpg",
      description: "Be aware of your surroundings while driving….On-road or Off-road. 360-Camera gives the driver All-Round View."
    },
    {
      title: "3D DRL",
      image: "https://shokonauto.com/wp-content/uploads/2023/10/3D-DRL-01.jpg",
      description: "Look different; a sophisticated way to personalise your LandCruiser 300. Install Daytime Running Light for enhanced safety."
    }
  ], []);

  const interiorProducts = useMemo(() => [
    {
      title: "RAK Kit",
      image: "https://shokonauto.com/wp-content/uploads/2023/10/fire-01.jpg",
      description: "Roadside Assistance Kit for emergency or breakdown encountered on the road. Contents are Safety Triangle, First Aid Kit, etc."
    },
    {
      title: "Smart Mirror",
      image: "https://shokonauto.com/wp-content/uploads/2023/10/Smart-Mirror-E-Mirror-.jpg",
      description: "Electronic full-display inside rear-view mirror with super-wide angle camera. View is not blocked by seat headrests."
    },
    {
      title: "Display Audio",
      image: "https://shokonauto.com/wp-content/uploads/2023/10/Display-Audio-02.jpg",
      description: "Upgrade entry-level vehicles equipped with a basic Radio to a superior Audio unit with hi-resolution touch-screen."
    },
    {
      title: "Entertainment System",
      image: "https://shokonauto.com/wp-content/uploads/2023/10/Rear-Seat-Entertainment-System-01.jpg",
      description: "Rear Seat Entertainment system is a boon for travellers in the rear row of seats, whether children or adults."
    }
  ], []);

  return (
    <ClickSpark
      sparkColor="#ff4500"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={500}
      easing="ease-out"
      extraScale={1.2}
    >
      <div className="App">
        <Header />
        <div className="section-animate visible">
          <Hero />
        </div>
        <div className="section-animate">
          <SamuraiSection />
        </div>
        <div className="section-animate">
          <StatsSection />
        </div>
        <div className="section-animate">
          <ExteriorSection products={exteriorProducts} />
        </div>
        <div className="section-animate">
          <InteriorSection products={interiorProducts} />
        </div>
        <div className="section-animate">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </ClickSpark>
  );
}

export default App;
