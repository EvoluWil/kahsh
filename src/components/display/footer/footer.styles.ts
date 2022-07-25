import styled from 'styled-components/native';
import { RFHeight, RFWidth } from '../../../utils/responsive-sizes.util';

export const FooterContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.shape};
  height: ${RFHeight(176)}px;
`;

export const FooterImage = styled.Image`
  width: ${RFWidth(307)}px;
`;
