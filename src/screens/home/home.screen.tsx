import React from 'react';
import { HomeScreenProps } from '@/screens/home/home.types';
import { Page, PageWrapper } from '@components/page';
import { Header } from '@components/header';
import { BlackBelt } from '@components/black-belt';

import * as Styles from './home.styles';
import { AboutSection } from '@screens/home/sections/about/about.section';
import { GallerySection } from '@screens/home/sections/gallery/gallery.section';
import { ContactSection } from '@screens/home/sections/contact/contact.section';
import { phrases } from '@/configs/phrases.config';
import { ValuesSection } from '@screens/home/sections/values/values.section';
import { ScheduleSection } from '@screens/home/sections/schedule/schedule.section';
import { LocationSection } from '@screens/home/sections/location/location.section';
import { Footer } from '@components/footer';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [phrase, setPhrase] = React.useState('');

  React.useEffect(() => {
    const _phrase = phrases[Math.floor(Math.random() * phrases.length)];
    setPhrase(_phrase);
  }, []);

  return (
    <Page>
      <Header />

      <Styles.HeroSection>
        <Styles.HeroSectionContent>
          {/**/}
          <Styles.HeroSectionFooter>
            <PageWrapper css={{ flexDirection: 'row' }}>
              <Styles.HeroSectionPhraseContent>
                <Styles.HeroSectionPhrase>"{phrase}"</Styles.HeroSectionPhrase>
              </Styles.HeroSectionPhraseContent>

              <Styles.HeroSectionFooterLogos>
                <Styles.HeroSectionLogo src="/prime-logo.png" />
                <Styles.HeroSectionLogo src="/cicero-logo.png" />
              </Styles.HeroSectionFooterLogos>
            </PageWrapper>
          </Styles.HeroSectionFooter>

          {/*<Styles.HeroSectionPhrase>"{phrase}"</Styles.HeroSectionPhrase>*/}

          {/*<Styles.HeroSectionButtons>*/}
          {/*  <a href="#contato" target="_blank">*/}
          {/*    <Button css={{ bg: '$primary' }}>Entre em contato</Button>*/}
          {/*  </a>*/}

          {/*</Styles.HeroSectionButtons>*/}
        </Styles.HeroSectionContent>
      </Styles.HeroSection>

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

      <ContactSection />

      <ValuesSection />

      <ScheduleSection />

      <LocationSection />

      <Footer />
    </Page>
  );
};

export { HomeScreen };
