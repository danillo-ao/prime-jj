import React from 'react';
import { PageWrapper } from '@components/page';
import {
  Section,
  SectionGrid,
  SectionGridDivisor,
  SectionGridItem,
  SectionTitle,
} from '@screens/home/sections/section.styles';

import { ContactOption } from '@screens/home/sections/contact/components/contact-option';

import * as Styles from './contact.styles';
import WhatsappIcon from '@components/icons/svg/whatsapp.icon';
import InstagramIcon from '@components/icons/svg/instagram.icon';
import FacebookIcon from '@components/icons/svg/facebook.icon';
import { links } from '@/configs/links.config';
import { Button } from '@components/button';

const iconSize = 25;

const ContactSection = () => {
  return (
    <Section css={{ mt: -100 }}>
      <PageWrapper>
        <SectionTitle>Entre em contato</SectionTitle>

        <SectionGrid>
          <SectionGridItem css={{ justifyContent: 'center' }}>
            <Styles.ContactOptionsGroup>
              <ContactOption
                icon={<WhatsappIcon width={iconSize} height={iconSize} />}
                label="Whatsapp"
                description="Mande uma mensagem!"
                link={links.whatsapp}
              />
              <ContactOption
                icon={<InstagramIcon width={iconSize} height={iconSize} />}
                label="Instagram"
                description="Siga-nos no instagram!"
                link={links.instagram}
              />
              <ContactOption
                icon={<FacebookIcon width={iconSize} height={iconSize} />}
                label="Facebook"
                description="Siga-nos no Facebook!"
                link={links.facebook}
              />
            </Styles.ContactOptionsGroup>
          </SectionGridItem>
          <SectionGridDivisor />
          <SectionGridItem>
            <Styles.ContactOptionsCTAWrapper>
              {/*<Styles.ContactOptionsLogoWrapper>*/}
              {/*  <Styles.ContactOptionsLogo src="/cicero-logo.png" alt="" />*/}
              {/*  <Styles.ContactOptionsLogo src="/prime-logo.png" alt="" />*/}
              {/*</Styles.ContactOptionsLogoWrapper>*/}

              <Styles.ContactOptionsLabel>
                Entre em contato para mais informações, para descobrir promoções
                e tirar as suas dúvidas!
                <br />
                <br />
                Agende uma aula experimental agora, e venha conhecer a academia!
              </Styles.ContactOptionsLabel>

              <a href={links.whatsapp} target="_blank">
                <Button>Agendar aula experimental!</Button>
              </a>
            </Styles.ContactOptionsCTAWrapper>
          </SectionGridItem>
        </SectionGrid>
      </PageWrapper>
    </Section>
  );
};

export { ContactSection };
