import type { ReactNode } from 'react';
import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

type mainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: mainLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="mt-2 flex w-full justify-center px-3 md:mt-3 md:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export { MainLayout };
