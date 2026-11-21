import About from '@/components/pages/home/about';
import Achievements from '@/components/pages/home/achievements';
import Experience from '@/components/pages/home/experience';
import Footer from '@/components/pages/home/footer';
import Hero from '@/components/pages/home/hero';
import Projects from '@/components/pages/home/projects';
import Navbar from '@/components/pages/navbar';

export default function Home() {
  return (
    <div>
      <div className='bg-gradient-primary'>
        <Navbar />
        <Hero />
      </div>
      {/* <Transition /> */}
      <Projects />
      <Achievements />
      <About />
      <Experience />
      <Footer />
      {/* <Hero /> */}
    </div>
  );
}

function Transition() {
  return (
    <div className='px-6 pt-12 pb-18 flex w-full gap-10'>
      {Array.from({ length: 5 }, (value, i) => {
        return (
          <span
            className='inline-block font-black w-full whitespace-nowrap font-mono text-6xl'
            key={i}
          >
            ARFA BANYU{' '}
          </span>
        );
      })}
    </div>
  );
}
