import {
  widthPercentageToDP,
  heightPercentageToDP
} from 'react-native-responsive-screen';

export function RFWidth(width: number): number {
  return widthPercentageToDP(`${(width / 1440) * 100}%`);
}

export function RFHeight(height: number): number {
  return heightPercentageToDP(`${(height / 2300) * 100}%`);
}

export function RFFontSize(size: number): number {
  return heightPercentageToDP(`${(size / 2600) * 100}%`);
}
