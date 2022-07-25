import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { useTheme } from 'styled-components';
import {
  ButtonMenuContainer,
  ButtonMenuContent,
  ButtonMenuIcon,
  ButtonMenuImage,
  ButtonMenuLink,
  ButtonMenuLinkIcon,
  ButtonMenuLinkText,
  ButtonMenuMessage,
  ButtonMenuTitle
} from './button-menu.styles';

interface ButtonMenuProps {
  bgColor?: string;
  color?: string;
  title?: string | JSX.Element;
  message: string | JSX.Element;
  linkTitle: string | JSX.Element;
  image: ImageSourcePropType;
  imageFloat: ImageSourcePropType;
  icon: ImageSourcePropType;
  menuPosition?: 'center' | 'right';
  floatConfig: {
    height?: number;
    width?: number;
    top: number;
    left: number;
  };
  iconConfig: {
    height: number;
    width: number;
    top: number;
    left: number;
  };
  onPress: () => void;
  widthMessage?: number;
}
export const ButtonMenu: React.FC<ButtonMenuProps> = ({
  bgColor,
  color,
  title,
  message,
  linkTitle,
  image,
  imageFloat,
  floatConfig,
  icon,
  iconConfig,
  menuPosition,
  onPress,
  widthMessage
}) => {
  const theme = useTheme();
  return (
    <ButtonMenuContainer bgColor={bgColor}>
      <ButtonMenuImage source={image}></ButtonMenuImage>
      <ButtonMenuContent>
        {!!title && <ButtonMenuTitle color={color}>{title}</ButtonMenuTitle>}
        <ButtonMenuMessage widthMessage={widthMessage} color={color}>
          {message}
        </ButtonMenuMessage>
        <ButtonMenuLink color={color} position={menuPosition} onPress={onPress}>
          <ButtonMenuLinkText
            color={color ? null : bgColor || theme.colors.primary}
          >
            {linkTitle}
          </ButtonMenuLinkText>
          <ButtonMenuLinkIcon
            color={color ? null : bgColor || theme.colors.primary}
            name="arrow-right"
          />
        </ButtonMenuLink>
      </ButtonMenuContent>
      <ButtonMenuIcon source={imageFloat} config={floatConfig} />
      <ButtonMenuIcon source={icon} config={iconConfig} />
    </ButtonMenuContainer>
  );
};
