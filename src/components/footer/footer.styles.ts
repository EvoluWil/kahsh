import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.shape};

  padding: 0.5rem 0;
  margin-top: auto;
`;
