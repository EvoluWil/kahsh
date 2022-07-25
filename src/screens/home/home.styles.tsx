import styled from 'styled-components/native';
import {
  RFFontSize,
  RFHeight,
  RFWidth
} from '../../utils/responsive-sizes.util';

export const HomeContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HomeShadow = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.font.regular};
  margin: ${RFHeight(260)}px ${RFWidth(84)}px ${RFHeight(84)}px;
  border-radius: ${RFHeight(50)}px;
  padding-bottom: ${RFHeight(80)}px;
`;

export const MenuContainer = styled.View`
  position: relative;
  margin: ${RFHeight(80)}px ${RFWidth(125)}px 0 auto;
`;

export const KahshPayFontSize = styled.Text`
  font-size: ${RFFontSize(26)}px;
`;

export const Strip = styled.View`
  position: absolute;
  width: ${RFWidth(600)}px;
  height: ${RFHeight(175)}px;
  right: -${RFWidth(400)}px;
  top: ${RFHeight(130)}px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Ellipse = styled.View`
  position: absolute;
  width: ${RFHeight(480)}px;
  height: ${RFHeight(480)}px;
  border-radius: ${RFHeight(480 / 2)}px;
  right: -${RFWidth(160)}px;
  top: -${RFHeight(12)}px;
  background: ${({ theme }) => theme.colors.primary};
`;
