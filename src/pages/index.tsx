import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { useTheme } from 'styled-components';
import { HomeHeader } from '../components/partials/home/home-header/home-header.component';
import { ButtonMenu } from '../components/ui/button-menu/button-menu.component';
import {
  ButtonMenuTextContainer,
  ButtonMenuTitle,
  EllipseComponent,
  HomeContainer,
  StripComponent
} from '../styles/home.styles';

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Home | Kahsh</title>
      </Head>

      <HomeContainer>
        <HomeHeader />
        <section>
          <ButtonMenu
            message={
              <ButtonMenuTextContainer style={{ color: '#373988' }}>
                <p>
                  <strong style={{ fontSize: '0.8rem' }}>Cadastre-se e</strong>
                </p>
                <p>
                  <strong style={{ fontSize: '0.8rem' }}>ganhe</strong> R$ 25,00 em
                </p>
                <p>criptomoedas Kahsh</p>
              </ButtonMenuTextContainer>
            }
            bgColor="#ECC114"
            linkTitle="Quero Kahsh"
            linkColor="#373988"
            image="register.png"
            imageFloat="kahsh.png"
            imageIcon="kahsh-left.png"
            floatConfig={{
              width: 70,
              top: -10,
              left: -28
            }}
            iconConfig={{
              width: 12,
              top: -10,
              left: 86
            }}
            url="https://kahsh.com/promo?key=c0c186eb5b1e8a25dab3fa814fbd7dd8"
          />
          <ButtonMenu
            title={
              <ButtonMenuTitle>
                <strong>Kahsh</strong> Store
              </ButtonMenuTitle>
            }
            message={
              <ButtonMenuTextContainer>
                <p>
                  O <strong>primeiro</strong> marketplace em
                </p>
                <p>
                  criptomoedas do <strong>mundo</strong>
                </p>
                <p>
                  está <strong>aqui!</strong>
                </p>
              </ButtonMenuTextContainer>
            }
            bgColor="#009BDB"
            linkTitle="Saiba mais"
            image="store.png"
            imageFloat="shoes.png"
            imageIcon="headphone.png"
            floatConfig={{
              width: 140,
              top: -10,
              left: -20
            }}
            iconConfig={{
              width: 20,
              top: -17,
              left: 80
            }}
            url="https://store.kahsh.com/"
          />
          <ButtonMenu
            title={
              <ButtonMenuTitle>
                <strong>Kahsh</strong> Land
              </ButtonMenuTitle>
            }
            message={
              <ButtonMenuTextContainer>
                <p>
                  O <strong>primeiro</strong> Shopping Center
                </p>
                <p>
                  Cripto do <strong>Metaverso</strong>
                </p>
                <p>
                  no <strong>mundo!</strong>
                </p>
              </ButtonMenuTextContainer>
            }
            bgColor="#5D4FF4"
            menuPosition="center"
            linkTitle="Saiba mais"
            image="land.png"
            imageFloat="vr-user.png"
            imageIcon="vr.png"
            floatConfig={{
              width: 135,
              top: 0,
              left: -30
            }}
            iconConfig={{
              width: 30,
              top: 60,
              left: 78
            }}
            url="https://land.kahsh.com/"
          />
          <ButtonMenu
            title={
              <ButtonMenuTitle>
                <strong>Kahsh</strong> Pay
              </ButtonMenuTitle>
            }
            message={
              <ButtonMenuTextContainer style={{ fontSize: '0.4rem', lineHeight: '0.7rem' }}>
                <p>
                  Transferências <strong>sem taxas,</strong> uso de qualquer bandeira de cartão,{' '}
                  <strong>velocidade e segurança,</strong>o <strong>KahshPay</strong> te dá hoje, o que será tendência
                  no futuro.
                </p>
              </ButtonMenuTextContainer>
            }
            bgColor="#28205a"
            linkTitle="Saiba mais"
            image="pay.png"
            imageFloat="machine.png"
            imageIcon="terminal.png"
            floatConfig={{
              width: 100,
              top: 0,
              left: 0
            }}
            iconConfig={{
              width: 12,
              top: -8,
              left: 83
            }}
            url="https://pay.kahsh.com/"
            component={<StripComponent />}
          />
          <ButtonMenu
            title={
              <ButtonMenuTitle>
                <strong>Kahsh</strong> Exchange
              </ButtonMenuTitle>
            }
            message={
              <ButtonMenuTextContainer style={{ maxWidth: '90%' }}>
                <p>
                  <strong>Compre, venda e gerencie</strong>
                </p>
                <p>momento e de qualquer</p>
                <p>lugar</p>
              </ButtonMenuTextContainer>
            }
            bgColor={theme.primary}
            linkTitle="Saiba mais"
            image="exchange.png"
            imageFloat="digital.png"
            imageIcon="kahsh.png"
            floatConfig={{
              width: 100,
              top: 2,
              left: -40
            }}
            iconConfig={{
              width: 30,
              top: 15,
              left: 84
            }}
            url="https://exchange.kahsh.com/otc"
            component={<EllipseComponent />}
          />
        </section>
      </HomeContainer>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 * 7 // 7 days
  };
};
