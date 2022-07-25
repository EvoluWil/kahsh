import styled from 'styled-components/native';
import {
  RFFontSize,
  RFHeight,
  RFWidth
} from '../../../../utils/responsive-sizes.util';

export const HomeHeaderContainer = styled.View`
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: ${RFWidth(95)}px;
`;

export const HomeHeaderImage = styled.Image`
  border-radius: ${RFHeight(70)}px;
  width: ${RFWidth(487)}px;
  height: ${RFHeight(757)}px;
  margin-top: -${RFHeight(109)}px;
`;

export const HomeHeaderContent = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const HomeHeaderContentLogo = styled.Image`
  width: ${RFWidth(430)}px;
  height: ${RFHeight(200)}px;
  margin-right: ${RFWidth(21)}px;
`;

export const HomeHeaderContentDescription = styled.View`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: center;

  margin-right: -${RFWidth(79)}px;
  padding-left: ${RFWidth(169)}px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: ${RFHeight(70)}px;
  border-bottom-left-radius: ${RFHeight(70)}px;
`;

export const HomeHeaderContentDescriptionText = styled.Text`
  max-width: ${RFWidth(468)}px;
  font-size: ${RFFontSize(50)}px;
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`;

export const HomeHeaderPointUp = styled.Image`
  position: absolute;
  width: ${RFWidth(350)}px;
  left: 35%;
  top: 10%;
`;
