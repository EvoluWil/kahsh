import styled from 'styled-components/native';
import { RFFontSize } from '../../../utils/responsive-sizes.util';
interface TextBoldContainerProps {
  size?: number;
  color?: string;
}
export const TextBoldContainer = styled.Text<TextBoldContainerProps>`
  font-size: ${({ size }) => RFFontSize(size) || RFFontSize(50)}px;
  font-family: ${({ theme }) => theme.font.bold};
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
`;
