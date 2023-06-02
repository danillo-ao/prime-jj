import React from 'react';
import { ContactOptionProps } from './contact-option.types';

import * as Styles from './contact-option.styles';
const ContactOption: React.FC<ContactOptionProps> = ({
  icon,
  label,
  description,
  link,
}) => {
  return (
    <Styles.ContactOptionContent href={link} target="_blank">
      <Styles.ContactOptionIcon>{icon}</Styles.ContactOptionIcon>
      <Styles.ContactOptionTexts>
        <Styles.ContactOptionLabel>{label}</Styles.ContactOptionLabel>
        <Styles.ContactOptionDescription>
          {description}
        </Styles.ContactOptionDescription>
      </Styles.ContactOptionTexts>
    </Styles.ContactOptionContent>
  );
};

export { ContactOption };
