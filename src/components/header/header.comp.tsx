import React from 'react';
import { HeaderProps } from '@components/header/header.types';

import * as Styles from './header.styles';
import { PageWrapper } from '@components/page';
import { Menu, X } from 'react-feather';

const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = React.useState<boolean>(false);
  const [opened, setOpened] = React.useState<boolean>(false);

  const handleScroll = () => {
    const _scrolled = window.pageYOffset > 125;
    setOpened(false);

    if (_scrolled !== scrolled) {
      setScrolled(_scrolled);
    }
  };

  React.useEffect(() => {
    setScrolled(window.pageYOffset > 125);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Styles.HeaderContent scrolled={scrolled || opened}>
      <PageWrapper>
        <Styles.HeaderInner>
          <Styles.HeaderMenuLabel>PRIME</Styles.HeaderMenuLabel>

          <Styles.HeaderMenuOptions visible={opened}>
            <a className="menu-link" href="#about">
              <Styles.HeaderMenuOption>Sobre</Styles.HeaderMenuOption>
            </a>
            <a className="menu-link" href="#gallery">
              <Styles.HeaderMenuOption>Galeria</Styles.HeaderMenuOption>
            </a>
            <a className="menu-link" href="#contact">
              <Styles.HeaderMenuOption>Contato</Styles.HeaderMenuOption>
            </a>
            <a className="menu-link" href="#values">
              <Styles.HeaderMenuOption>Valores</Styles.HeaderMenuOption>
            </a>
            <a className="menu-link" href="#schedule">
              <Styles.HeaderMenuOption>Horários</Styles.HeaderMenuOption>
            </a>
            <a className="menu-link" href="#location">
              <Styles.HeaderMenuOption>Onde Estamos</Styles.HeaderMenuOption>
            </a>
          </Styles.HeaderMenuOptions>

          <Styles.HeaderMenuOptionAction
            onClick={() => setOpened(_opened => !_opened)}
          >
            {opened ? <X size={20} /> : <Menu size={20} />}
          </Styles.HeaderMenuOptionAction>
        </Styles.HeaderInner>
      </PageWrapper>
    </Styles.HeaderContent>
  );
};

export { Header };
