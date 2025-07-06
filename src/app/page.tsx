import Hero from './components/Hero';
import About from './components/About';
import FocusArea from './components/FocusArea';
import RatingsInsurance from './components/RatingsInsurance';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <hr className="my-10 border-t border-gray-300 w-3/4 mx-auto" />

      <About />
      <hr className="my-10 border-t border-black w-3/4 mx-auto" />

      <FocusArea />
      <RatingsInsurance />
      <Testimonial />
      <FAQ />
      <Footer />
    </main>
  );
}
