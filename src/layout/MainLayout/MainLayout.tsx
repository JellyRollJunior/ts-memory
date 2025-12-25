import type { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

type mainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: mainLayoutProps) => {
  return (
    <div className="flex min-h-screen min-w-screen flex-col">
      <Header />
      <main className="mt-3 flex w-full justify-center px-3">{children}</main>
      <Footer />
    </div>
  );
};

export { MainLayout };
