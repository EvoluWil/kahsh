import React from 'react';
import { TextBoldContainer } from './text-bold.styles';

interface TextBoldProps {
  size?: number;
  color?: string;
}
export const TextBold: React.FC<TextBoldProps> = ({
  children,
  size,
  color
}) => {
  return (
    <TextBoldContainer size={size} color={color}>
      {children}
    </TextBoldContainer>
  );
};
