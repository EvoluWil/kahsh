import styled from 'styled-components';

interface ButtonMenuContainerProps {
  bgColor: string;
  iconConfig: {
    width: number;
    top: number;
    left: number;
  };
}

export const ButtonMenuContainer = styled.div<ButtonMenuContainerProps>`
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1.5rem;

  span {
    position: absolute;
    background-color: ${({ bgColor }) => bgColor};
    right: 0;
    width: 85%;
    max-width: 858px;
    height: 100%;
    border-radius: 1rem;
  }

  & > img {
    position: absolute;
    width: ${({ iconConfig }) => iconConfig.width}%;
    left: ${({ iconConfig }) => iconConfig.left}%;
    top: ${({ iconConfig }) => iconConfig.top}%;
  }
`;

interface ButtonMenuImageContainerProps {
  floatConfig: {
    width: number;
    top: number;
    left: number;
  };
}

export const ButtonMenuImageContainer = styled.div<ButtonMenuImageContainerProps>`
  position: relative;
  margin-right: auto;
  width: 40%;
  z-index: 1;
  padding: 1rem 0 0.8rem;

  .image {
    width: 80%;
  }

  .float {
    width: ${({ floatConfig }) => floatConfig.width}%;
    position: absolute;
    left: ${({ floatConfig }) => floatConfig.left}%;
    top: ${({ floatConfig }) => floatConfig.top}%;
  }
`;

export const ButtonMenuTextContainer = styled.div`
  z-index: 1;
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-right: 1rem;
`;

interface ButtonMenuLinkProps {
  linkColor?: string;
  menuPosition?: 'center' | 'right';
}
export const ButtonMenuLink = styled.a<ButtonMenuLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin: ${({ menuPosition }) => (menuPosition === 'center' ? '1rem auto 0' : '1rem 1rem 0 auto')};
  padding: 0.2rem 0.5rem;
  font-weight: bold;
  font-size: 1rem;

  border-radius: 1rem;
  background-color: ${({ theme, linkColor }) => (linkColor ? linkColor : theme.background)};

  font-size: 0.5rem;

  cursor: pointer;
`;
