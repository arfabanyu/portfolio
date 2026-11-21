import Image from 'next/image';

const About = () => {
  const photos = [
    { src: '/about/banyu-2.jpeg', alt: 'Banyu-2' },
    { src: '/about/banyu-1.jpeg', alt: 'Banyu-1' },
    { src: '/about/banyu-3.jpeg', alt: 'Banyu-3' },
    { src: '/about/banyu-4.jpeg', alt: 'Banyu-4' },
    { src: '/about/banyu-5.jpeg', alt: 'Banyu-5' },
  ];

  const bornIn = new Date(2008, 12, 4);
  const now = new Date();
  return (
    <div className='bg-slate-950 text-sky-100' id='about'>
      <div className='flex-col lg:flex-row flex px-8 gap-8 max-w-7xl mx-auto'>
        <div className='flex-1 grid grid-cols-2 gap-0.5 rounded overflow-hidden'>
          <div className='relative'>
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover grayscale'
            />
          </div>
          {/* Bagian atas */}
          <div className='grid grid-rows-2 gap-0.5'>
            {/* Foto kiri atas */}
            <div className='relative'>
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                sizes='(max-width: 768px) 60vw, 35vw'
                className='object-cover grayscale '
              />
            </div>

            {/* Dua foto kanan dan pembagian bawah */}
            <div className='grid grid-cols-2 gap-0.5'>
              {/* Foto kanan atas */}
              <div className='relative'>
                <Image
                  src={photos[2].src}
                  alt={photos[2].alt}
                  fill
                  sizes='(max-width: 768px) 38vw, 20vw'
                  className='object-cover grayscale'
                />
              </div>

              {/* Dua foto kanan bawah */}
              <div className='grid grid-rows-2 gap-0.5'>
                <div className='relative'>
                  <Image
                    src={photos[3].src}
                    alt={photos[3].alt}
                    fill
                    sizes='(max-width: 768px) 19vw, 10vw'
                    className='object-cover grayscale object-top'
                  />
                </div>

                <div className='relative'>
                  <Image
                    src={photos[4].src}
                    alt={photos[4].alt}
                    fill
                    sizes='(max-width: 768px) 19vw, 10vw'
                    className='object-cover grayscale'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Foto bawah */}
        </div>
        <h2 className='text-4xl font-display my-auto'>
          <span>a</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
          <span> </span>
          <span>m</span>
          <span>e</span>
        </h2>

        <div className='w-full space-y-2 max-w-lg'>
          <div className='space-y-2 text-justify  tracking-wide'>
            <p>
              Hi! I&apos;m Banyu, a {now.getFullYear() - bornIn.getFullYear()}
              -year-old student from Jakarta, Indonesia, currently studying
              Software Engineering at SMK Negeri 1 Jakarta. I&apos;m interested
              in many areas of technology, from software development and system
              design to algorithms, problem-solving, and game development. I
              enjoy exploring how things work, understanding the logic behind
              them, and figuring out different ways to solve problems.
              Sometimes, that curiosity takes me down rabbit holes, exploring
              concepts or topics that I initially knew very little about.
            </p>
            <p>
              Outside of programming, I enjoy drawing, watching animes, reading
              manwhas, playing games, and others. I also find myself interested
              in topics beyond technology, from psychology and human behavior to
              philosophy and the way people think. I guess I just enjoy seeing
              things from different perspectives and discovering connections
              between ideas that might seem unrelated at first.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
