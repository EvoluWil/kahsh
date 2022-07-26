import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: calc(100vw - 5rem);
  max-width: 1272px;
  background-color: ${({ theme }) => theme.shape};
  margin: 3rem 5rem;
  border-radius: 1rem;
  padding-bottom: 4rem;

  section {
    padding: 0 2rem;
  }
`;

export const ButtonMenuTitle = styled.div`
  font-size: 0.8rem;
  margin: 0.5rem 0;
`;

export const ButtonMenuTextContainer = styled.div`
  font-size: 0.5rem;
  line-height: 1rem;
`;

export const StripComponent = styled.div`
  position: absolute;
  height: 30%;
  margin-right: -160%;
  width: 100vw;
  right: 120;
  top: 35%;
  background: ${({ theme }) => theme.primary};
`;

export const EllipseComponent = styled.div`
  position: absolute;
  width: initial;
  height: 110%;
  right: -3rem;
  border-radius: 50%;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.primary};
`;
