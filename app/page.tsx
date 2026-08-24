import { accentText } from '@/lib/utils';
// import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <h1 className={'text-6xl'}>
            ARFA <span className={accentText()}>BANYU</span> <br /> SANTORO
          </h1>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
