import React from 'react';
import {
  Section,
  SectionGrid,
  SectionGridItem,
  SectionTitle,
} from '@screens/home/sections/section.styles';
import { PageWrapper } from '@components/page';
import { Typography } from '@components/typography';
import { Benefits } from '@screens/home/sections/about/components/benefits';

import * as Styles from './about.styles';
import ConfidentIcon from '@components/icons/svg/confident.icon';
import DefenceIcon from '@components/icons/svg/defence.icon';
import MuscleIcon from '@components/icons/svg/muscle.icon';
import DisciplineIcon from '@components/icons/svg/discipline.icon';
import MindIcon from '@components/icons/svg/mind.icon';
import FriendsIcon from '@components/icons/svg/friends.icon';

const AboutSection = () => {
  return (
    <PageWrapper>
      <Section>
        <SectionGrid css={{ mb: '80px' }}>
          <SectionGridItem>
            <SectionTitle css={{ textAlign: 'left', mb: '$4' }}>
              Sobre o jiu jitsu
            </SectionTitle>
            <Typography>
              O Brazilian Jiu-Jitsu (BJJ) é uma forma de arte marcial brasileira
              que se concentra no combate no solo e no uso de alavancas e
              estrangulamentos para derrotar oponentes. Desenvolvido pela
              família Gracie no início do século XX, o BJJ permite que
              indivíduos de menor porte possam se defender efetivamente contra
              adversários maiores e mais fortes.
              <br />
              <br />
              Além de sua eficácia em situações de autodefesa, o BJJ oferece
              benefícios físicos, mentais e promove disciplina, autocontrole e
              desenvolvimento pessoal. Hoje, o BJJ é praticado em todo o mundo
              como uma forma de arte marcial competitiva, autodefesa e uma
              maneira de preservar a tradição e a história dessa arte milenar.
            </Typography>
          </SectionGridItem>
          <SectionGridItem />
        </SectionGrid>

        <SectionTitle css={{ textAlign: 'left', mb: '$4' }}>
          Beneficios do Jiu-jitsu
        </SectionTitle>
        <SectionGrid>
          <SectionGridItem>
            <Styles.AboutBenefitsCardsWrapper>
              <Benefits
                title="Condicionamento físico"
                description="A prática regular do jiu-jitsu melhora a resistência cardiovascular, força muscular, flexibilidade e coordenação motora."
                icon={<MuscleIcon />}
              />
              <Benefits
                title="Autodefesa"
                description="O BJJ é uma arte marcial altamente eficaz para defesa pessoal, ensinando técnicas para lidar com situações de confronto e controlar agressores sem a necessidade de golpes violentos."
                icon={<DefenceIcon />}
              />
              <Benefits
                title="Aumento da confiança"
                description="À medida que os praticantes de jiu-jitsu adquirem habilidades e se tornam mais proficientes, sua confiança aumenta. Isso se reflete tanto na vida cotidiana quanto em situações de confronto."
                icon={<ConfidentIcon />}
              />
              <Benefits
                title="Disciplina e autocontrole"
                description="O jiu-jitsu ensina a importância da disciplina, respeito e autocontrole. Os praticantes aprendem a controlar suas emoções e a se esforçarem para melhorar constantemente."
                icon={<DisciplineIcon />}
              />
              <Benefits
                title="Desenvolvimento mental"
                description="O BJJ envolve a resolução de problemas e o raciocínio estratégico durante o combate. Isso ajuda a desenvolver habilidades mentais, como foco, concentração e tomada de decisões rápidas."
                icon={<MindIcon />}
              />
              <Benefits
                title="Comunidade e amizades"
                description="A prática do jiu-jitsu geralmente ocorre em academias ou clubes, onde os praticantes formam laços sociais e desenvolvem amizades com pessoas que têm interesses semelhantes."
                icon={<FriendsIcon />}
              />
            </Styles.AboutBenefitsCardsWrapper>
          </SectionGridItem>
        </SectionGrid>
      </Section>
    </PageWrapper>
  );
};

export { AboutSection };
