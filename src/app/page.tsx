'use client';

import React from 'react';
import { HomeScreen } from '@/screens/home';

export default function Home() {
  React.useEffect(() => {
    const links = document.getElementsByClassName('menu-link');
    const gap = 120;

    for (let i = 0; i < links.length; i++) {
      const _link = links[i];

      _link.addEventListener('click', function (event) {
        event.preventDefault();

        const href = _link.getAttribute('href') as string;
        const section = document.getElementById(href.replace('#', ''));

        if (section) {
          const offsetTop = section.offsetTop;

          window.scrollTo({
            top: offsetTop - gap,
            behavior: 'smooth',
          });
        }
      });
    }
    //
  }, []);

  return <HomeScreen />;
}
