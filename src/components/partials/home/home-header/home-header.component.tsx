import React from 'react';
import {
  HomeHeaderBannerContainer,
  HomeHeaderBannerContent,
  HomeHeaderBannerContentContainer,
  HomeHeaderContainer
} from './home-header.styles';
import Logo from '../../../../../assets/logo.png';
import Banner from '../../../../../assets/banner.png';
import PointUp from '../../../../../assets/point_up.png';

export const HomeHeader = () => {
  return (
    <HomeHeaderContainer>
      <HomeHeaderBannerContainer>
        <img className="banner" src="/banner.png" alt="Good Vibes Only" />
        <img className="hand" src="/point-up.png" alt="Hand" />
      </HomeHeaderBannerContainer>
      <HomeHeaderBannerContentContainer>
        <img src="/logo.png" alt="Kahsh" />
        <HomeHeaderBannerContent>
          <span />
          <p>
            Com <strong>apenas um</strong> cadastro, você tem um ecossistema <strong>completo</strong> de
            possibilidades.
          </p>
        </HomeHeaderBannerContent>
      </HomeHeaderBannerContentContainer>
    </HomeHeaderContainer>
  );
};
