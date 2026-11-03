import About from '@/components/pages/home/about';
import Hero from '@/components/pages/home/hero';
import Navbar from '@/components/pages/navbar';

export default function Home() {
  return (
    <div>
      <div className='bg-linear-to-b from-sky-500 to-sky-300 text-sky-950'>
        <Navbar />
        <Hero />
      </div>
      <Transition />
      <About />
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
