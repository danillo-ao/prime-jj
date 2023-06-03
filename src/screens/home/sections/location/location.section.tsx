import React from 'react';

import * as Styles from './location.styles';
import { PageWrapper } from '@components/page';
import { SectionTitle } from '@screens/home/sections/section.styles';
const LocationSection = () => {
  return (
    <section>
      <PageWrapper>
        <SectionTitle>Onde estamos</SectionTitle>
      </PageWrapper>
      <Styles.LocationMapContent>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14617.191230258904!2d-46.5461657!3d-23.6653057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42f9f5baaf2b%3A0x51eb86634eac5cbc!2sPrime%20jiu%20jitsu!5e0!3m2!1spt-BR!2sbr!4v1685747068240!5m2!1spt-BR!2sbr"
          width="100"
          height="300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: '100%' }}
        />
      </Styles.LocationMapContent>
    </section>
  );
};

export { LocationSection };
