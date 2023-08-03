import React from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header style={{ width: '100%', padding: '1rem 0', borderBottom: '1px solid #eee' }}>
        {/* Replace "Header" with the desired header content */}
        Header
      </header>

      <main style={{ width: '100%', padding: '2rem 0' }}>{children}</main>

      <footer style={{ width: '100%', padding: '1rem 0', borderTop: '1px solid #eee', textAlign: 'center' }}>
        {/* Replace "Footer" with the desired footer content */}
        Footer
      </footer>
    </div>
  );
}
