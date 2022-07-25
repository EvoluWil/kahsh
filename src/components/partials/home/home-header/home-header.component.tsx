import React from 'react';
import {
  HomeHeaderContainer,
  HomeHeaderContent,
  HomeHeaderContentDescription,
  HomeHeaderContentDescriptionText,
  HomeHeaderContentLogo,
  HomeHeaderImage,
  HomeHeaderPointUp
} from './home-header.styles';
import Logo from '../../../../../assets/logo.png';
import Banner from '../../../../../assets/banner.png';
import PointUp from '../../../../../assets/point_up.png';
import { TextBold } from '../../../ui/text-bold/text-bold.component';

export const HomeHeader = () => {
  return (
    <HomeHeaderContainer>
      <HomeHeaderImage source={Banner} resizeMode="cover" />
      <HomeHeaderContent>
        <HomeHeaderContentLogo source={Logo} resizeMode="contain" />
        <HomeHeaderContentDescription>
          <HomeHeaderContentDescriptionText>
            Com <TextBold>apenas um</TextBold> cadastro, você tem um ecossistema{' '}
            <TextBold>completo</TextBold> de possibilidades.
          </HomeHeaderContentDescriptionText>
        </HomeHeaderContentDescription>
      </HomeHeaderContent>
      <HomeHeaderPointUp source={PointUp} resizeMode="contain" />
    </HomeHeaderContainer>
  );
};
