import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { StyledText } from '../StyledText';
import { useTheme } from '@/context/ThemeContext';

const SemiCircleGauge = ({ progress }) => {
  const { colors } = useTheme();
  const width = 140;
  const height = 70;
  const strokeWidth = 12;
  const radius = (width - strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const progressStroke = (progress / 100) * circumference;

  const d = `M ${strokeWidth / 2},${height} A ${radius},${radius} 0 0 1 ${width - strokeWidth / 2},${height}`;

  return (
    <View style={styles.gaugeContainer}>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor={colors.plantStatusOnline} stopOpacity="1" />
            <Stop offset="1" stopColor="#AEEA73" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Path
          d={d}
          fill="none"
          stroke={colors.unitSummaryGaugeBg}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <Path
          d={d}
          fill="none"
          stroke="url(#grad)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference}`}
          strokeDashoffset={circumference - progressStroke}
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.gaugeTextContainer}>
        <StyledText weight="700" style={[styles.gaugeValue, { color: colors.plantEmissionStat }]}>234.2</StyledText>
        <StyledText style={[styles.gaugeUnit, { color: colors.plantCardMuted }]}>Megawatt</StyledText>
      </View>
    </View>
  );
};

export function GeneratorPowerCard() {
  const { colors } = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: colors.plantCardBg }]}>
      <StyledText weight="600" style={[styles.title, { color: colors.plantCardMuted }]}>Generator Power</StyledText>
      <SemiCircleGauge progress={234.2 / 1476 * 100} />
      <View style={[styles.maxPill, { backgroundColor: colors.unitSummaryMaxPill }]}>
        <StyledText style={[styles.maxText, { color: colors.unitSummaryMaxPillText }]}>Maximum MW: 1,476MW</StyledText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 13,
    alignSelf: 'flex-start',
  },
  gaugeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  gaugeTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: '30%',
  },
  gaugeValue: {
    fontSize: 18,
  },
  gaugeUnit: {
    fontSize: 12,
  },
  maxPill: {
    borderRadius: 29,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  maxText: {
    fontSize: 10,
  },
});
