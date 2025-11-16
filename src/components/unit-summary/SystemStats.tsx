import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledText } from '../StyledText';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '@/context/ThemeContext';

const PressureIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M12 6V18" stroke="#AEAEB2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M8 10L12 6L16 10" stroke="#AEAEB2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" stroke="#AEAEB2" strokeWidth="2"/>
    </Svg>
);

const TempIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M13.5 13.5H10.5V0H13.5V13.5ZM12 24C10.0718 24 8.25591 23.2098 6.90381 21.8577C5.5517 20.5056 4.76155 18.6897 4.76155 16.7615C4.76155 14.5 6.00001 13.5 7.5 13.5H16.5C18 13.5 19.2385 14.5 19.2385 16.7615C19.2385 18.6897 18.4483 20.5056 17.0962 21.8577C15.7441 23.2098 13.9282 24 12 24Z" fill="#AEAEB2"/>
      <Path d="M16.5 13.5C18 13.5 19.2385 14.5 19.2385 16.7615C19.2385 18.6897 18.4483 20.5056 17.0962 21.8577C15.7441 23.2098 13.9282 24 12 24C10.0718 24 8.25591 23.2098 6.90381 21.8577C5.5517 20.5056 4.76155 18.6897 4.76155 16.7615C4.76155 14.5 6.00001 13.5 7.5 13.5H16.5Z" stroke="#AEAEB2" strokeWidth="1.5"/>
    </Svg>
);

const StatCard = ({ icon, label, value, unit }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: colors.plantCardBg }]}>
      <View style={styles.iconContainer}>{icon}</View>
      <StyledText style={[styles.label, { color: colors.plantCardMuted }]}>{label}</StyledText>
      <View style={styles.valueContainer}>
        <StyledText weight="700" style={[styles.value, { color: colors.plantCardText }]}>{value}</StyledText>
        <StyledText weight="600" style={[styles.unit, { color: colors.plantCardText }]}>{unit}</StyledText>
      </View>
    </View>
  );
};

export function SystemStats() {
  return (
    <View style={styles.cardsRow}>
      <StatCard icon={<PressureIcon />} label="SG Pressure" value="71.1" unit="kgcm²A" />
      <StatCard icon={<TempIcon />} label={'RCS Average\nTemperature'} value="301.5" unit="°c" />
      <StatCard icon={<PressureIcon />} label={'Pressurizer\npressure'} value="17.3" unit="kg/cm²" />
    </View>
  );
}

const styles = StyleSheet.create({
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  card: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    height: 160,
  },
  iconContainer: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  label: {
    fontSize: 13,
    lineHeight: 16,
  },
  valueContainer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  value: {
    fontSize: 24,
  },
  unit: {
    fontSize: 12,
  },
});
