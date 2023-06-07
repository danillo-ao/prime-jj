import React from 'react';
import { Section, SectionTitle } from '@screens/home/sections/section.styles';
import { PageWrapper } from '@components/page';

import * as Styles from './schedule.styles';
import {
  ScheduleHours,
  ScheduleTable,
} from '@screens/home/sections/schedule/components/schedule-table';
import { links } from '@/configs/links.config';
import { Button } from '@components/button';

const hours: { [day: string]: ScheduleHours[] } = {
  seg: [
    { label: '--', category: 'adult' },
    { label: '17:00', category: 'kids' },
    { label: '19:30', category: 'adult' },
  ],
  ter: [
    { label: '16:00', category: 'adult' },
    { label: '17:00', category: 'kids' },
    { label: '19:30', category: 'adult' },
  ],
  qua: [
    { label: '--', category: 'adult' },
    { label: '17:00', category: 'kids' },
    { label: '19:30', category: 'adult' },
  ],
  qui: [
    { label: '16:00', category: 'adult' },
    { label: '17:00', category: 'kids' },
    { label: '19:30', category: 'adult' },
  ],
  sex: [
    { label: '--', category: 'adult' },
    { label: '--', category: 'adult' },
    { label: '--', category: 'adult' },
  ],
  sab: [
    { label: '10:00', category: 'kids' },
    { label: '11:00', category: 'adult' },
    { label: '--', category: 'adult' },
  ],
};

const ScheduleSection = () => {
  return (
    <Section css={{ mb: 100 }} id="schedule">
      <PageWrapper>
        <SectionTitle>Horários</SectionTitle>

        <Styles.ScheduleTableContent>
          <ScheduleTable day="segunda" hours={hours.seg} />
          <ScheduleTable day="terça" hours={hours.ter} />
          <ScheduleTable day="quarta" hours={hours.qua} />
          <ScheduleTable day="quinta" hours={hours.qui} />
          <ScheduleTable day="sexta" hours={hours.sex} />
          <ScheduleTable day="sabádo" hours={hours.sab} />
        </Styles.ScheduleTableContent>

        <Styles.ScheduleTableLegends>
          <Styles.ScheduleTableLegend>
            <Styles.ScheduleTableLegendBadge css={{ bg: '$kids' }} />
            Kids
          </Styles.ScheduleTableLegend>
          <Styles.ScheduleTableLegend>
            <Styles.ScheduleTableLegendBadge css={{ bg: '$adult' }} />
            Adulto
          </Styles.ScheduleTableLegend>
        </Styles.ScheduleTableLegends>

        <Styles.ScheduleTableTips>
          <Styles.ScheduleTableTip>
            <Styles.ScheduleTableTipAsterisk>*</Styles.ScheduleTableTipAsterisk>
            Duração média do treino adulto de 1h30
          </Styles.ScheduleTableTip>
          <Styles.ScheduleTableTip>
            <Styles.ScheduleTableTipAsterisk>*</Styles.ScheduleTableTipAsterisk>
            Novas turmas e horários podem ser abertos mediante demanda, confira{' '}
            <a href={links.whatsapp} target="_blank">
              aqui
            </a>
          </Styles.ScheduleTableTip>
        </Styles.ScheduleTableTips>

        <Styles.ScheduleTableCTA>
          <a href={links.whatsapp_schedule} target="_blank">
            <Button>Agendar treino experimental</Button>
          </a>
        </Styles.ScheduleTableCTA>
      </PageWrapper>
    </Section>
  );
};

export { ScheduleSection };
