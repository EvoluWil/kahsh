import Image from 'next/image';
import React from 'react';
import { FooterContainer } from './footer.styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://kahsh.com/" rel="noreferrer" target="_blank">
        <Image src="/logo.png" alt="Kahsh" width={307 / 3} height={143 / 3} />
      </a>
    </FooterContainer>
  );
};
