import React from 'react';
import { HeaderProps } from '@components/header/header.types';

import * as Styles from './header.styles';
import { PageWrapper } from '@components/page';

const Header: React.FC<HeaderProps> = () => {
  return (
    <Styles.HeaderContent>
      <PageWrapper>
        <Styles.HeaderInner>
          <Styles.HeaderMenuLabel>PRIME</Styles.HeaderMenuLabel>

          <Styles.HeaderMenuOptions>
            <Styles.HeaderMenuOption>História</Styles.HeaderMenuOption>
            <Styles.HeaderMenuOption>Galeria</Styles.HeaderMenuOption>
            <Styles.HeaderMenuOption>Fale Conosco</Styles.HeaderMenuOption>
            <Styles.HeaderMenuOption>Valores</Styles.HeaderMenuOption>
            <Styles.HeaderMenuOption>Horários</Styles.HeaderMenuOption>
            <Styles.HeaderMenuOption>Onde Estamos</Styles.HeaderMenuOption>
          </Styles.HeaderMenuOptions>
        </Styles.HeaderInner>
      </PageWrapper>
    </Styles.HeaderContent>
  );
};

export { Header };
