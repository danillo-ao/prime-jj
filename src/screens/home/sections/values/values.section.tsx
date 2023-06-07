import React from 'react';
import WaveTop from '@components/waves/wave-top.comp';
import WaveBottom from '@components/waves/wave-bottom.comp';
import { Section, SectionTitle } from '@screens/home/sections/section.styles';
import { PageWrapper } from '@components/page';

import * as Styles from './values.styles';
import ValueTable from '@screens/home/sections/values/components/value-table/value-table.comp';
import { links } from '@/configs/links.config';

const ValuesSection = () => {
  return (
    <>
      <WaveTop />
      <Section css={{ my: -40, zIndex: 1 }} id="values">
        <Styles.ValuesSectionContent>
          <PageWrapper>
            <SectionTitle>Valores e planos</SectionTitle>
            {/**/}
            <Styles.ValuesTableContent>
              <ValueTable
                belt="white"
                value={300}
                installments={1}
                duration={'1 mês'}
                name="mensal"
              />
              <ValueTable
                belt="purple"
                value={400}
                installments={3}
                duration={'3 meses'}
                name="trimestral"
              />
              <ValueTable
                belt="brown"
                value={500}
                installments={7}
                duration={'7 meses'}
                name="semestral"
              />
              <ValueTable
                belt="black"
                value={600}
                installments={10}
                duration={'12 meses'}
                name="anual"
              />
            </Styles.ValuesTableContent>

            <Styles.ValuesTableFooter>
              <Styles.ValuesTableFooterComment>
                <Styles.ValuesTableFooterCommentHighlight>
                  *
                </Styles.ValuesTableFooterCommentHighlight>
                Taxa de matricula de{' '}
                <Styles.ValuesTableFooterColored>
                  R$ 138
                </Styles.ValuesTableFooterColored>
              </Styles.ValuesTableFooterComment>
              <Styles.ValuesTableFooterComment>
                <Styles.ValuesTableFooterCommentHighlight>
                  *
                </Styles.ValuesTableFooterCommentHighlight>
                Para consultar promoções, por favor, entre em contato
                diretamente{' '}
                <Styles.ValuesTableFooterLink
                  href={links.whatsapp}
                  target="_blank"
                >
                  via whatsapp
                </Styles.ValuesTableFooterLink>
              </Styles.ValuesTableFooterComment>
            </Styles.ValuesTableFooter>
            {/**/}
          </PageWrapper>
        </Styles.ValuesSectionContent>
      </Section>
      <WaveBottom />
    </>
  );
};

export { ValuesSection };
