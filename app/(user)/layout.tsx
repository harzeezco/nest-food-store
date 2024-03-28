import { Header } from '@user/home';
import * as React from 'react';

function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default UserLayout;
