import React from 'react';

import * as Styles from './footer.styles';
import { PageWrapper } from '@components/page';
import { values } from '@/configs/values.config';
import FacebookIcon from '@components/icons/svg/facebook.icon';
import InstagramIcon from '@components/icons/svg/instagram.icon';
import WhatsappIcon from '@components/icons/svg/whatsapp.icon';
import { links } from '@/configs/links.config';

const size = 25;

const Footer: React.FC = () => {
  return (
    <Styles.FooterContent>
      <PageWrapper>
        <Styles.FooterSections>
          <Styles.FooterLogo>
            <img src="/prime-logo.png" alt="prime-logo" />
          </Styles.FooterLogo>

          <Styles.FooterColumn>
            <Styles.FooterTitle>Menu</Styles.FooterTitle>
            <Styles.FooterColumnBody>
              <Styles.FooterColumnLink>Sobre</Styles.FooterColumnLink>
              <Styles.FooterColumnLink>Galeria</Styles.FooterColumnLink>
              <Styles.FooterColumnLink>Contato</Styles.FooterColumnLink>
              <Styles.FooterColumnLink>Valores</Styles.FooterColumnLink>
              <Styles.FooterColumnLink>Horários</Styles.FooterColumnLink>
            </Styles.FooterColumnBody>
          </Styles.FooterColumn>
          <Styles.FooterColumn>
            <Styles.FooterTitle>Contato</Styles.FooterTitle>
            <Styles.FooterColumnBody>
              <Styles.FooterContact>RENATO MIGUEL</Styles.FooterContact>
              <Styles.FooterContact>{values.address}</Styles.FooterContact>
              <Styles.FooterContact>{values.phone}</Styles.FooterContact>
            </Styles.FooterColumnBody>
          </Styles.FooterColumn>
          <Styles.FooterColumn>
            <Styles.FooterTitle>Acompanhe</Styles.FooterTitle>
            <Styles.FooterColumnBody css={{ flexDirection: 'row', gap: '$6' }}>
              <a href={links.whatsapp} target="_blank">
                <WhatsappIcon width={size} height={size} />
              </a>
              <a href={links.instagram} target="_blank">
                <InstagramIcon width={size} height={size} />
              </a>
              <a href={links.facebook} target="_blank">
                <FacebookIcon width={size} height={size} />
              </a>
            </Styles.FooterColumnBody>
          </Styles.FooterColumn>
        </Styles.FooterSections>
      </PageWrapper>

      <Styles.FooterDatas>
        <PageWrapper>
          <Styles.FooterDatasLine>
            <Styles.FooterName>
              Copyright © 2023 - Prime Jiu Jitsu / PSLPB Cicero Costha
            </Styles.FooterName>
            <Styles.FooterDev>
              desenvolvido por: Danillo Oliveira
            </Styles.FooterDev>
          </Styles.FooterDatasLine>
        </PageWrapper>
      </Styles.FooterDatas>
    </Styles.FooterContent>
  );
};

export { Footer };
