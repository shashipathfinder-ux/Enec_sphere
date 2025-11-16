import { Text, TextProps, StyleSheet } from 'react-native';

type StyledTextProps = TextProps & {
  weight?: '400' | '500' | '600' | '700';
};

export function StyledText({ style, weight = '400', ...props }: StyledTextProps) {
  const fontFamily = {
    '400': 'Inter_400Regular',
    '500': 'Inter_500Medium',
    '600': 'Inter_600SemiBold',
    '700': 'Inter_700Bold',
  }[weight];

  return <Text {...props} style={[styles.text, { fontFamily }, style]} />;
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
});
