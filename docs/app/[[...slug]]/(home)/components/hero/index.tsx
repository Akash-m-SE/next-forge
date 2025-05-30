import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Installer } from '../installer';
import NextLogo from './next.svg';
import TurborepoLogo from './turborepo.svg';

export const Hero = () => (
  <section className="flex flex-col items-center justify-center gap-6 bg-dashed px-4 py-16 sm:px-16 sm:py-24">
    <h1 className="max-w-3xl text-balance text-center font-semibold text-4xl leading-tight tracking-tighter! sm:text-5xl md:max-w-4xl md:text-6xl lg:leading-[1.1]">
      Production-grade{' '}
      <Image
        src={TurborepoLogo}
        alt=""
        width={48}
        height={48}
        className="pointer-events-none mx-1.5 inline-block h-8 w-auto translate-y-0.5 select-none align-baseline sm:h-[38px] md:h-[48px] md:translate-y-1"
      />
      Turborepo template for{' '}
      <Image
        src={NextLogo}
        alt=""
        width={48}
        height={48}
        className="pointer-events-none mx-1.5 inline-block h-8 w-auto translate-y-0.5 select-none align-baseline sm:h-[38px] md:h-[48px] md:translate-y-1 dark:invert"
      />
      Next.js apps
    </h1>
    <p className="max-w-xl text-balance text-center text-muted-foreground md:max-w-2xl md:text-lg">
      A monorepo template designed to have everything you need to build your new
      SaaS app as thoroughly as possible. Free and open source, forever.
    </p>
    <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-4 sm:flex-row">
      <Installer />
      <Button asChild size="lg">
        <Link href="/docs">Read the docs</Link>
      </Button>
    </div>
  </section>
);
