import React from 'react';
import {
  Section,
  SectionGrid,
  SectionGridDivisor,
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
    <Section css={{ pt: 70, mb: -50 }}>
      <PageWrapper>
        <SectionGrid css={{ mb: '80px', '@800': { mb: '40px' } }}>
          <SectionGridItem>
            <SectionTitle css={{ mb: '$4' }}>Sobre o jiu jitsu</SectionTitle>
            <Typography>
              O jiu-jitsu é uma arte marcial japonesa que se desenvolveu a
              partir de técnicas de combate samurai. Foi introduzido no Brasil
              no início do século XX pelo mestre Mitsuyo Maeda, também conhecido
              como Conde Koma. No Brasil, o jiu-jitsu se desenvolveu e se tornou
              conhecido como Brazilian Jiu-Jitsu (BJJ), graças aos esforços da
              família Gracie.
              <br />
              <br />O BJJ é conhecido por seu foco no combate no solo e no uso
              de alavancas e estrangulamentos para dominar o oponente,
              independentemente de seu tamanho ou força. O objetivo principal é
              permitir que uma pessoa menor e mais fraca defenda-se efetivamente
              contra um oponente maior e mais forte. O BJJ é praticado tanto
              como uma arte marcial competitiva quanto como uma forma de defesa
              pessoal.
            </Typography>
          </SectionGridItem>
          <SectionGridDivisor />
          <SectionGridItem>
            <Styles.AboutHistoryImageContent
              css={{ '@800': { display: 'none' } }}
            >
              <Styles.AboutHistoryImage src="/bjj.jpg" />
            </Styles.AboutHistoryImageContent>
          </SectionGridItem>
        </SectionGrid>

        <SectionTitle css={{ mb: '$4' }}>Beneficios</SectionTitle>
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
      </PageWrapper>
    </Section>
  );
};

export { AboutSection };
