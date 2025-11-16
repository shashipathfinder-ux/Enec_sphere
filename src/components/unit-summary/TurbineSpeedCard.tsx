import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { StyledText } from '../StyledText';
import { useTheme } from '@/context/ThemeContext';

const SpeedIcon = ({ color }) => (
  <Svg width="42" height="42" viewBox="0 0 42 42" fill="none">
    <Path d="M21 3.5C11.8825 3.5 4.375 11.0075 4.375 20.125C4.375 25.5675 7.0875 30.345 11.375 33.425L13.125 29.75C9.975 27.475 7.875 24.01 7.875 20.125C7.875 12.915 13.79 7 21 7C28.21 7 34.125 12.915 34.125 20.125C34.125 27.335 28.21 33.25 21 33.25C19.6 33.25 18.2525 33.04 16.975 32.655V36.4C18.2875 36.89 19.635 37.1 21 37.1C30.1175 37.1 37.625 29.5925 37.625 20.475C37.625 11.3575 30.1175 3.5 21 3.5ZM17.5 14L24.5 21L17.5 28V14Z" fill={color}/>
  </Svg>
);

export function TurbineSpeedCard() {
  const { colors } = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: colors.plantCardBg }]}>
      <View style={styles.header}>
        <StyledText weight="600" style={[styles.title, { color: colors.plantCardMuted }]}>Turbine Speed</StyledText>
        <View style={[styles.maxPill, { backgroundColor: colors.unitSummaryMaxPill }]}>
          <StyledText style={[styles.maxText, { color: colors.unitSummaryMaxPillText }]}>Maximum Speed (rpm): 1,800</StyledText>
        </View>
      </View>
      <View style={styles.content}>
        <View style={[styles.iconContainer, { backgroundColor: colors.unitSummaryIconBg }]}>
          <SpeedIcon color={colors.unitSummaryBlue} />
        </View>
        <StyledText weight="700" style={[styles.speedValue, { color: colors.plantEmissionStat }]}>325 rpm</StyledText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 13,
  },
  maxPill: {
    borderRadius: 29,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  maxText: {
    fontSize: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 12,
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  speedValue: {
    fontSize: 20,
  },
});
