import React from 'react';
import { View, StyleSheet } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { StyledText } from '../StyledText';
import { useTheme } from '@/context/ThemeContext';

export function ReactorPowerCard() {
  const { colors } = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: colors.plantCardBg }]}>
      <StyledText weight="600" style={[styles.title, { color: colors.plantCardMuted }]}>Reactor Power</StyledText>
      <View style={styles.progressContainer}>
        <CircularProgress
          value={97.2}
          radius={50}
          duration={2000}
          progressValueColor={colors.plantEmissionStat}
          activeStrokeColor={colors.unitSummaryPurple}
          inActiveStrokeColor={colors.unitSummaryGaugeBg}
          activeStrokeWidth={14}
          inActiveStrokeWidth={14}
          maxValue={100}
          title={'%'}
          titleStyle={{ fontWeight: 'bold', fontSize: 18, color: colors.plantEmissionStat }}
          progressValueStyle={{ fontWeight: '900', fontSize: 24, color: colors.plantEmissionStat }}
        />
      </View>
      <View style={[styles.maxPill, { backgroundColor: colors.unitSummaryMaxPill }]}>
        <StyledText style={[styles.maxText, { color: colors.unitSummaryMaxPillText }]}>Maximum (%): 100</StyledText>
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
  progressContainer: {
    marginVertical: 15,
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
