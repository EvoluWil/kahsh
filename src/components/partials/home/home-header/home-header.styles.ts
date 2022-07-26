import styled from 'styled-components';

export const HomeHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const HomeHeaderBannerContainer = styled.div`
  position: relative;
  margin: -15% 12% 0;

  .banner {
    width: 100%;
    max-width: 487px;
    max-height: 757px;
  }

  .hand {
    position: absolute;
    bottom: 10%;
    right: -40%;
    width: 80%;
    z-index: 1;
  }
`;

export const HomeHeaderBannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 75%;
    max-width: 430px;
    margin-left: 10%;
  }
`;

export const HomeHeaderBannerContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: 2rem;
  margin-bottom: 1.5%;

  span {
    position: absolute;
    left: 0;
    width: 100vw;
    height: 100%;
    border-radius: 1.5rem 0 0 1.5rem;
    background-color: ${({ theme }) => theme.primary};
  }

  p {
    font-size: 0.8rem;
    width: 100%;
    z-index: 1;
  }
`;
