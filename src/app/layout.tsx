import React from 'react';
import StitchesRegistry from '@/app/registry';
import '@styles/global.css';
export const metadata = {
  title: 'Prime Jiu Jitsu',
  description:
    'Academia de Jiu Jitsu localizada em Santo André. BJJ - JiuJitsu',
};

export default function RootLayout({ children }: any) {
  return (
    <html>
      <StitchesRegistry />
      <body>{children}</body>
    </html>
  );
}
