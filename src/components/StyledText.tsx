import React from 'react';
import { Text, TextProps } from 'react-native';

type StyledTextProps = TextProps & {
  weight?: '400' | '500' | '600' | '700';
};

const fontMap = {
  '400': 'Inter-Regular',
  '500': 'Inter-Medium',
  '600': 'Inter-SemiBold',
  '700': 'Inter-Bold',
};

export function StyledText({ style, weight = '400', ...props }: StyledTextProps) {
  const fontFamily = fontMap[weight];

  // The color should be passed via the `style` prop by the consumer component.
  return <Text {...props} style={[{ fontFamily }, style]} />;
}
