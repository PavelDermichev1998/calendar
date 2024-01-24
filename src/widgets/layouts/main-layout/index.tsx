import { ReactNode } from 'react';

import { Footer } from '../../footer';
import { Header } from '../../header';

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => (
  <div className='mx-auto max-w-[740px]'>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);
