import React from 'react';

import * as Styles from './value-table.styles';
import { ValueTableProps } from './value-table.types';
import { Button } from '@components/button';

const ValueTable: React.FC<ValueTableProps> = ({
  value,
  name,
  installments,
  duration,
  belt,
}) => {
  return (
    <Styles.ValueTableContent>
      <Styles.ValueTableHeader>
        <Styles.ValueTableHeaderTitleWrapper>
          <Styles.ValueTableHeaderPreTitle>
            Plano
          </Styles.ValueTableHeaderPreTitle>
          <Styles.ValueTableHeaderTitle>{name}</Styles.ValueTableHeaderTitle>
        </Styles.ValueTableHeaderTitleWrapper>
        <Styles.ValueTableHeaderBadge belt={belt} />
      </Styles.ValueTableHeader>
      <Styles.ValueTableBody>
        {/**/}
        <Styles.ValueTablePrice>
          <Styles.ValueTablePricePrefix>R$</Styles.ValueTablePricePrefix>
          {value}
          <Styles.ValueTablePriceSuffix>,00</Styles.ValueTablePriceSuffix>
        </Styles.ValueTablePrice>

        {installments && (
          <>
            <Styles.ValueTableBodyDivisor />
            <Styles.ValueTableBodyLine>
              <Styles.ValueTableBodyLineLabel>
                Em até
              </Styles.ValueTableBodyLineLabel>
              <Styles.ValueTableBodyLineValue>
                {installments}x no cartão
              </Styles.ValueTableBodyLineValue>
            </Styles.ValueTableBodyLine>
          </>
        )}

        <Styles.ValueTableBodyDivisor />
        <Styles.ValueTableBodyLine>
          <Styles.ValueTableBodyLineLabel>
            À vista
          </Styles.ValueTableBodyLineLabel>
          <Styles.ValueTableBodyLineValue>
            R$ 300
          </Styles.ValueTableBodyLineValue>
        </Styles.ValueTableBodyLine>

        <Styles.ValueTableBodyDivisor />
        <Styles.ValueTableBodyLine>
          <Styles.ValueTableBodyLineLabel>
            A cada
          </Styles.ValueTableBodyLineLabel>
          <Styles.ValueTableBodyLineValue>
            {duration}
          </Styles.ValueTableBodyLineValue>
        </Styles.ValueTableBodyLine>
        <Styles.ValueTableBodyDivisor css={{ mb: 0 }} />

        {/**/}
      </Styles.ValueTableBody>
      <Styles.ValueTableFooter>
        <Styles.ValueTableBodyLine css={{ justifyContent: 'center' }}>
          <Button css={{ bg: '$primary' }}>Adquirir plano {name}</Button>
        </Styles.ValueTableBodyLine>
      </Styles.ValueTableFooter>
    </Styles.ValueTableContent>
  );
};

export default ValueTable;
