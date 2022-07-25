import React from 'react';
import { HomeHeader } from '../../components/partials/home/home-header/home-header.component';
import { ButtonMenu } from '../../components/ui/button-menu/button-menu.component';
import { TextBold } from '../../components/ui/text-bold/text-bold.component';
import {
  Ellipse,
  HomeContainer,
  HomeShadow,
  KahshPayFontSize,
  MenuContainer,
  Strip
} from './home.styles';

import KahshLeft from '../../../assets/kahsh-left.png';
import Kahsh from '../../../assets/kahsh.png';
import Register from '../../../assets/register.png';

import Store from '../../../assets/store.png';
import Headphone from '../../../assets/headphone.png';
import Shoes from '../../../assets/shoes.png';

import Land from '../../../assets/land.png';
import Vr from '../../../assets/vr.png';
import VrUser from '../../../assets/vr-user.png';

import Pay from '../../../assets/pay.png';
import Machine from '../../../assets/machine.png';
import Terminal from '../../../assets/terminal.png';

import Exchange from '../../../assets/exchange.png';
import Digital from '../../../assets/digital.png';
import { Linking } from 'react-native';

export const Home: React.FC = () => {
  const handleNavigate = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <HomeContainer>
      <HomeShadow>
        <HomeHeader />
        <MenuContainer>
          <ButtonMenu
            message={
              <>
                <TextBold size={54} color="#373988">
                  Cadastre-se e ganhe
                </TextBold>{' '}
                R$ 25,00 em criptomoedas Kahsh
              </>
            }
            bgColor="#ECC114"
            color="#373988"
            linkTitle="Quero Kahsh"
            image={Register}
            imageFloat={Kahsh}
            icon={KahshLeft}
            floatConfig={{
              height: 360,
              width: 360,
              top: -40,
              left: -315
            }}
            iconConfig={{
              height: 200,
              width: 200,
              top: -80,
              left: 680
            }}
            onPress={() => handleNavigate('https://kahsh.com/register')}
          />
        </MenuContainer>
        <MenuContainer>
          <ButtonMenu
            title={
              <>
                <TextBold size={44}>Kahsh</TextBold> Store
              </>
            }
            message={
              <>
                O <TextBold size={40}>primeiro</TextBold> marketplace em
                criptomoedas do <TextBold size={40}>mundo</TextBold> está{' '}
                <TextBold size={40}>aqui</TextBold>
              </>
            }
            bgColor="#009bdb"
            linkTitle="Saiba mais"
            image={Store}
            imageFloat={Shoes}
            icon={Headphone}
            floatConfig={{
              height: 660,
              width: 660,
              top: -120,
              left: -260
            }}
            iconConfig={{
              height: 260,
              width: 260,
              top: -110,
              left: 600
            }}
            onPress={() => handleNavigate('https://store.kahsh.com')}
          />
        </MenuContainer>
        <MenuContainer>
          <ButtonMenu
            title={
              <>
                <TextBold size={44}>Kahsh</TextBold> Land
              </>
            }
            message={
              <>
                O <TextBold size={40}>primeiro</TextBold> Shopping Center Cripto
                do <TextBold size={40}>Metaverso</TextBold> no{' '}
                <TextBold size={40}>mundo</TextBold>
              </>
            }
            bgColor="#5d4ff4"
            menuPosition="center"
            linkTitle="Saiba mais"
            image={Land}
            imageFloat={VrUser}
            icon={Vr}
            floatConfig={{
              height: 420,
              top: -0,
              left: -280
            }}
            iconConfig={{
              height: 260,
              width: 460,
              top: 240,
              left: 520
            }}
            onPress={() => handleNavigate('https://land.kahsh.com')}
          />
        </MenuContainer>
        <MenuContainer>
          <Strip />
          <ButtonMenu
            title={
              <>
                <TextBold size={44}>Kahsh</TextBold> Pay
              </>
            }
            message={
              <KahshPayFontSize>
                Transferências <TextBold size={26}>sem taxas</TextBold>, uso de
                qualquer bandeira de cartão,{' '}
                <TextBold size={26}>Velocidade e Segurança</TextBold> , o{' '}
                <TextBold size={26}>KahshPay</TextBold> te dá hoje, o que será
                tendência no futuro.
              </KahshPayFontSize>
            }
            bgColor="#28205a"
            linkTitle="Saiba mais"
            image={Pay}
            imageFloat={Machine}
            icon={Terminal}
            floatConfig={{
              height: 460,
              width: 480,
              top: -20,
              left: -200
            }}
            iconConfig={{
              height: 160,
              width: 200,
              top: -60,
              left: 660
            }}
            onPress={() => handleNavigate('https://pay.kahsh.com')}
          />
        </MenuContainer>
        <MenuContainer>
          <Ellipse />
          <ButtonMenu
            title={
              <>
                <TextBold size={44}>Kahsh</TextBold> Exchange
              </>
            }
            widthMessage={450}
            message={
              <>
                <TextBold size={30}>Compre, venda e gerencie</TextBold> suas
                moedas a qualquer momento e de qualquer lugar.
              </>
            }
            linkTitle="Saiba mais"
            image={Exchange}
            imageFloat={Digital}
            icon={Kahsh}
            floatConfig={{
              height: 480,
              width: 460,
              top: 0,
              left: -360
            }}
            iconConfig={{
              height: 260,
              width: 260,
              top: 40,
              left: 680
            }}
            onPress={() => handleNavigate('https://exchange.kahsh.com/otc')}
          />
        </MenuContainer>
      </HomeShadow>
    </HomeContainer>
  );
};
