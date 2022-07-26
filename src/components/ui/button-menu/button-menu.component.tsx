import React from 'react';
import {
  ButtonMenuContainer,
  ButtonMenuImageContainer,
  ButtonMenuLink,
  ButtonMenuTextContainer
} from './button-menu.styles';

interface ButtonMenuProps {
  bgColor?: string;
  title?: string | JSX.Element;
  message: string | JSX.Element;
  linkTitle: string | JSX.Element;
  url: string;
  linkColor?: string;
  menuPosition?: 'center' | 'right';
  image: string;
  imageFloat: string;
  imageIcon: string;
  floatConfig: {
    width: number;
    top: number;
    left: number;
  };
  iconConfig: {
    width: number;
    top: number;
    left: number;
  };
  component?: JSX.Element;
}
export const ButtonMenu: React.FC<ButtonMenuProps> = ({
  bgColor,
  title,
  message,
  linkTitle,
  linkColor,
  url,
  image,
  imageFloat,
  floatConfig,
  imageIcon,
  iconConfig,
  menuPosition,
  component
}) => {
  return (
    <ButtonMenuContainer bgColor={bgColor || ''} iconConfig={iconConfig}>
      {!!component && component}
      <span />
      <ButtonMenuImageContainer floatConfig={floatConfig}>
        <img className="image" src={`/${image}`} alt={image} />
        <img className="float" src={`/${imageFloat}`} alt={imageFloat} />
      </ButtonMenuImageContainer>
      <ButtonMenuTextContainer>
        {!!title && title}
        {message}
        <ButtonMenuLink
          linkColor={linkColor}
          style={{ color: linkColor ? '#FFF' : bgColor }}
          href={url}
          rel="noreferrer"
          target="_blank"
          menuPosition={menuPosition}
        >
          {linkTitle} <i className="fa fa-arrow-right" />
        </ButtonMenuLink>
      </ButtonMenuTextContainer>
      <img src={`/${imageIcon}`} alt={imageIcon} />
    </ButtonMenuContainer>
  );
};
