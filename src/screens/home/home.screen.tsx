import React from 'react';
import { HomeScreenProps } from '@/screens/home/home.types';
import { Page, PageWrapper } from '@components/page';
import { Header } from '@components/header';
import { BlackBelt } from '@components/black-belt';

import * as Styles from './home.styles';
import { GallerySection } from '@/screens/home/sections/gallery.section';
import { TalkToUsSection } from '@/screens/home/sections/talk-to-us.section';
import { ValuesSection } from '@/screens/home/sections/values.section';
import { ScheduleSection } from '@/screens/home/sections/schedule.section';
import { LocationSection } from '@/screens/home/sections/location.section';
import { AboutSection } from '@screens/home/sections/about/about.section';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Page>
      <Header />

      <Styles.HeroSection />

      <Styles.BlackBeltContent>
        <BlackBelt />
        <Styles.BlackBeltNameWrapper>
          <PageWrapper css={{ flex: 1 }}>
            <Styles.BlackBeltNameContent>
              <Styles.BlackBeltName>Prof. Renato miguel</Styles.BlackBeltName>
            </Styles.BlackBeltNameContent>
          </PageWrapper>
        </Styles.BlackBeltNameWrapper>
      </Styles.BlackBeltContent>

      <AboutSection />
      <GallerySection />
      <TalkToUsSection />
      <ValuesSection />
      <ScheduleSection />
      <LocationSection />
    </Page>
  );
};

export { HomeScreen };
