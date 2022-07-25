import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import {
  RFFontSize,
  RFHeight,
  RFWidth
} from '../../../utils/responsive-sizes.util';

interface ButtonMenuContainerProps {
  bgColor: string;
}
export const ButtonMenuContainer = styled.View<ButtonMenuContainerProps>`
  position: relative;
  width: ${RFWidth(860)}px;
  height: ${RFHeight(450)}px;
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.colors.primary};
  border-radius: ${RFHeight(50)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonMenuContent = styled.View`
  width: ${RFWidth(620)}px;
  align-items: flex-start;
`;

export const ButtonMenuImage = styled.Image`
  width: ${RFWidth(374)}px;
  height: ${RFHeight(420)}px;
  margin-left: -${RFWidth(204)}px;
`;

interface ButtonMenuText {
  color?: string;
}

export const ButtonMenuTitle = styled.Text<ButtonMenuText>`
  font-size: ${RFFontSize(44)}px;
  margin: ${RFHeight(20)}px ${RFWidth(80)}px 0;

  color: ${({ color, theme }) => (color ? color : theme.colors.text)};
  font-family: ${({ theme }) => theme.font.regular};
`;

interface ButtonMenuMessageProps {
  color?: string;
  widthMessage?: number;
}

export const ButtonMenuMessage = styled.Text<ButtonMenuMessageProps>`
  width: ${({ widthMessage }) =>
    widthMessage ? RFWidth(widthMessage) + 'px' : 'auto'};
  line-height: ${RFHeight(50)}px;
  margin-top: ${RFHeight(40)}px;
  margin-left: ${RFWidth(80)}px;
  font-size: ${RFFontSize(36)}px;
  color: ${({ color, theme }) => (color ? color : theme.colors.text)};
  font-family: ${({ theme }) => theme.font.regular};
`;

interface ButtonMenuLink {
  color?: string;
  position?: 'center' | 'right';
}
export const ButtonMenuLink = styled.TouchableOpacity<ButtonMenuLink>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${RFHeight(72)}px;
  margin-left: auto;
  margin-right: ${({ position }) =>
    position === 'center' ? RFWidth(240) : RFWidth(60)}px;
  margin-top: ${RFWidth(16)}px;
  padding: 0 ${RFWidth(40)}px;
  border-radius: ${RFHeight(36)}px;
  background-color: ${({ color, theme }) =>
    color ? color : theme.colors.text};
`;

interface ButtonMenuText {
  color?: string;
}
export const ButtonMenuLinkText = styled.Text<ButtonMenuText>`
  font-size: ${RFFontSize(30)}px;
  color: ${({ color, theme }) => (color ? color : theme.colors.text)};
  font-family: ${({ theme }) => theme.font.bold};
  margin-right: ${RFWidth(10)}px;
`;

export const ButtonMenuLinkIcon = styled(Feather)<ButtonMenuText>`
  font-size: ${RFFontSize(44)}px;
  color: ${({ color, theme }) => (color ? color : theme.colors.text)};
  font-family: ${({ theme }) => theme.font.bold};
`;

interface ButtonMenuIcon {
  config: {
    height?: number;
    width?: number;
    top: number;
    left: number;
  };
}
export const ButtonMenuIcon = styled.Image<ButtonMenuIcon>`
  position: absolute;
  left: ${({ config }) => RFWidth(config.left)}px;
  top: ${({ config }) => RFHeight(config.top)}px;

  width: ${({ config }) =>
    config?.width ? RFWidth(config.width) + 'px' : '70%'};
  max-height: ${({ config }) => RFHeight(config.height) + 'px' || '100%'};
`;
