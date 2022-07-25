import React from 'react';
import { FooterContainer, FooterImage } from './footer.styles';
import Logo from '../../../../assets/logo.png';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterImage source={Logo} resizeMode="contain" />
    </FooterContainer>
  );
};
