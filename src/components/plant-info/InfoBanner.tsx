import React from 'react';
import { View, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { StyledText } from '../StyledText';
import { Info } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';

export function InfoBanner() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.plantInfoBannerBg }]}>
      <Info size={20} color={colors.plantHeaderIcon} />
      <StyledText style={[styles.text, { color: colors.plantInfoBannerText }]}>
        Realtime and historical data can be accessed using{' '}
        <TouchableOpacity onPress={() => Linking.openURL('https://example.com')}>
          <StyledText style={[styles.linkText, { color: colors.plantHeaderIcon }]}>PI Vision/Barakah360</StyledText>
        </TouchableOpacity>
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 40,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    gap: 8,
  },
  text: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  linkText: {
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
